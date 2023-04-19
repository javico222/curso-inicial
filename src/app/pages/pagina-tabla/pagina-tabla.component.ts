import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css'],
  //providers: [MessageService]
})
export class PaginaTablaComponent implements OnInit{
  listEmpleado: IDataEmpleado[] =[];
  columnTabla: any;
 

  constructor(private rutas: Router,
              private empleadoService: EmpleadoService,
              private mensajes: MessageService){

  }
  ngOnInit(): void {
    this.inicioColumnaTabla();

    console.log('hola estoy aqui desde ngoninit');
    // this.empleadoService.getAllEmployee().subscribe(
    //   (datos) =>{
    //     console.log(datos);
    //     this.listEmpleado=datos.data;
    //   },(error) => {
    //     console.log(error);
    //   }
    // );
    this.empleadoService.getAllEmployee().subscribe(
      {
        next:(datos)=> {
          console.log(datos);
          this.listEmpleado=datos.data;
          this.mensajes.add({ severity: 'success', summary: 'Success', detail: 'Message Content'});
        },
        error:(err)=> {
          console.log(err);
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Message Content'});
        }
      }
    )
  }
  inicioColumnaTabla(){
    this.columnTabla = [
      {
        field: 'id',header: 'ID'
      },
      {
        field: 'name', header: 'Nombre Empleado'
      },
      {
        field: 'salary', header: 'Salario Empleado'
      },
      {
        field: 'edad', header: 'Edad'
      }
    ]

  }
  

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}
