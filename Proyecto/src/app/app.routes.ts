import { Routes } from '@angular/router';
import { ZonaComponent } from './components/zona/zona.component';
import { CreareditarzonaComponent } from './components/zona/creareditarzona/creareditarzona.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreareditarcontactoComponent } from './components/contacto/creareditarcontacto/creareditarcontacto.component';
import { ListarcontactoidComponent } from './components/contacto/listarcontactoid/listarcontactoid.component';
import { ListaridzonaComponent } from './components/zona/listaridzona/listaridzona.component';
import { ZonaalertaComponent } from './components/zonaalerta/zonaalerta.component';
import { CreareditarzonaalertaComponent } from './components/zonaalerta/creareditarzonaalerta/creareditarzonaalerta.component';
import { ConsejoComponent } from './components/consejo/consejo.component';
import { CreareditarconsejoComponent } from './components/consejo/creareditarconsejo/creareditarconsejo.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { ZonacontactoComponent } from './components/zonacontacto/zonacontacto.component';
import { CreareditarzonacontactoComponent } from './components/zonacontacto/creareditarzonacontacto/creareditarzonacontacto.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { PlanDeEvacuacionComponent } from './components/plan-de-evacuacion/plan-de-evacuacion.component';
import { CreareditarplanesComponent } from './components/plan-de-evacuacion/creareditarplanes/creareditarplanes.component';
import { SimulacroComponent } from './components/simulacro/simulacro.component';
import { CreareditarsimulacrosComponent } from './components/simulacro/creareditarsimulacros/creareditarsimulacros.component';
import { CreareditaralertaComponent } from './components/alerta/creareditaralerta/creareditaralerta.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CantidadAlertasTipoComponent } from './components/reportes/cantidad-alertas-tipo/cantidad-alertas-tipo.component';
import { BuscarcontactoszonaComponent } from './components/reportes/buscarcontactoszona/buscarcontactoszona.component';
import { RolComponent } from './components/rol/rol.component';
import { CreareditarrolComponent } from './components/rol/creareditarrol/creareditarrol.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path:'login', component:LoginComponent,
    },
    {
    path: 'zonas',component:ZonaComponent,
    children:[
        {
            path:'nuevazona',component:CreareditarzonaComponent
        },
        {
            path:'ediciones/:id',component:CreareditarzonaComponent
        },
        {
            path: 'listadoid2/:id',component:ListaridzonaComponent
        }
    ]
    },
    {
    path: 'contactoayuda', component:ContactoComponent,
    children:[
        {
            path:'nuevocontactoayuda', component:CreareditarcontactoComponent
        },
        {
            path:'ediciones1/:id' ,component:CreareditarcontactoComponent
        },
        {
            path:'listadoid/:id' ,component:ListarcontactoidComponent
        }
    ],
    canActivate: [seguridadGuard],
    },
    {
        path: 'consejos', component:ConsejoComponent,
        children:[
            {
                path:'nuevo', component:CreareditarconsejoComponent
            }
        ]
    },
    {
        path:'alertas', component:AlertaComponent,
        children:[
            {
                path:'nuevo', component:CreareditaralertaComponent
            }
        ]
    },
    {
        path:'zonaAlerta', component:ZonaalertaComponent,
        children:[
            {
                path:'nuevo', component:CreareditarzonaalertaComponent
            }
        ]
    },
    {
        path:'zonacontactosayuda', component:ZonacontactoComponent,
        children:[
            {
                path:'nuevo', component:CreareditarzonacontactoComponent
            },
            {
                path:'buscar', component:BuscarcontactoszonaComponent
            }
        ]
    },
    {
        path:'planesevacuacion', component:PlanDeEvacuacionComponent,
        children:[
            {
                path:'nuevo', component:CreareditarplanesComponent,
            },
            {
                path:'editar/:id', component:CreareditarplanesComponent,
            },
        ]
    },
    {
        path:'simualcro', component:SimulacroComponent,
        children:[
            {
                path:'nuevo', component:CreareditarsimulacrosComponent,
            }
        ]
    },

    {
        path: 'homes', component: HomeComponent,

    },
    {
        path:'reportes', component:ReportesComponent,
        children:[
            {
                path:'cantidadAlertasTipo', component:CantidadAlertasTipoComponent,
            }
        ]
    },
    {
        path:'roles', component:RolComponent,
        children:[
            {
                path:'nuevo', component:CreareditarrolComponent,
            },
            {
                path:'editar/:id', component:CreareditarrolComponent
            },
        ]
    },
];
