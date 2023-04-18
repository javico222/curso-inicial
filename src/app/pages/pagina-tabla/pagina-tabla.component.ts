import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit{
  listEmpleado: IDataEmpleado[] =[];
  columnTabla: any;
  listMenu: MenuItem[]=[];
  activeItem!: MenuItem;

  constructor(private rutas: Router,
              private empleadoService: EmpleadoService){

  }
  ngOnInit(): void {
    this.inicioColumnaTabla();
    this.inicioMenu();
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
        },
        error:(err)=> {
          console.log(err);
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
  inicioMenu(){
    this.listMenu = [
      {
        label: 'Cliente'
      },
      {
        label: 'Empresa'
      }
    ];
    this.activeItem=this.listMenu[0];
  }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}
