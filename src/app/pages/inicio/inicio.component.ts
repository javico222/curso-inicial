import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
nombre='Eduardo';
apellido= 'Reyna';
loadingVisible=false;
//formUsuario!: FormGroup;
formEmpleado!: FormGroup;

constructor (private ruta: Router,private mensajes: MessageService,private serviceEmpleado: EmpleadoService){
  

}
ngOnInit(): void {
  this.buildFormulario();
}

visualizarLoading(){
this.loadingVisible=true;
setTimeout(() =>{
  this.loadingVisible=false;

},2000)

}
irPaginaTabla(){
  this.ruta.navigate(['tabla']);
}

buildFormulario(){
  this.formEmpleado=new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      salary: new FormControl ('',[Validators.required]),
      age: new FormControl ('',[Validators.required])
    }
  );
}
verificar(){
  console.log(this.formEmpleado);
  if(this.formEmpleado.valid)
  {
    this.crearEmpleado();
    //this.mensajes.add({ severity: 'success', summary: 'Formulario Correcto', detail: 'Exito' });
  }
  else
  {
    this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene los campos requeridos' });
  }
  

}
crearEmpleado(){
  this.serviceEmpleado.createEmployee(this.formEmpleado.value.name,
                                      this.formEmpleado.value.salary,
                                      this.formEmpleado.value.age).subscribe({
                                        next:(resp)=>{
                                          this.formEmpleado.reset();
                                          this.mensajes.add({severity: 'success',summary: 'Empleado creado con éxito', detail: 'éxito'});
                                        },
                                        error: (resp) =>{
                                          this.mensajes.add({severity: 'error',summary: 'Error',detail: 'Hubo un error'});
                                        }


                                      })
  
  
}

}
