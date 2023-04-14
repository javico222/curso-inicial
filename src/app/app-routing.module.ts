import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';

const routes: Routes =[
  { path: '', redirectTo:'inicio',pathMatch:'full'},
  { path:'inicio',component:InicioComponent },
  { path: 'tabla', component: PaginaTablaComponent}


];
@NgModule(
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
            
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{}
