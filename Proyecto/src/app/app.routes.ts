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
import { ListaridsimulacroComponent } from './components/simulacro/listaridsimulacro/listaridsimulacro.component';
import { ContactospornombrezonaComponent } from './components/reportes/contactospornombrezona/contactospornombrezona.component';
import { CantidadAlertasTipoComponent } from './components/reportes/cantidad-alertas-tipo/cantidad-alertas-tipo.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { RegisterComponent } from './components/register/register.component';
import { ListarconsejoidComponent } from './components/consejo/listarconsejoid/listarconsejoid.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CreareditarusuariosComponent } from './components/usuario/creareditarusuarios/creareditarusuarios.component';
import { ListarusuarioidComponent } from './components/usuario/listarusuarioid/listarusuarioid.component';
import { QuantityAlertsByUserDTO } from './models/QuantityAlertsByUserDTO';
import { UsuariosCantidadAlertasComponent } from './components/reportes/usuarios-cantidad-alertas/usuarios-cantidad-alertas.component';
import { ZonasCantidadAlertasComponent } from './components/reportes/zonas-cantidad-alertas/zonas-cantidad-alertas.component';
import { ListarConsejosTipoComponent } from './components/reportes/listar-consejos-tipo/listar-consejos-tipo.component';
import { ListarPlanesZonaComponent } from './components/reportes/listar-planes-zona/listar-planes-zona.component';
import { RolComponent } from './components/rol/rol.component';
import { CreareditarrolComponent } from './components/rol/creareditarrol/creareditarrol.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaridzonaalertaComponent } from './components/zonaalerta/listaridzonaalerta/listaridzonaalerta.component';
import { ListaridalertaComponent } from './components/alerta/listaridalerta/listaridalerta.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'login', component:LoginComponent,
    },
    {
        path:'register', component:RegisterComponent,
    },
    {
        path:'menu', component:AppComponent,
        canActivate: [seguridadGuard],
    },
    {
        path:'principal', component:MenuComponent,
        canActivate: [seguridadGuard],
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
    ],
    canActivate: [seguridadGuard],
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
            },
            {
                path:'ediciones1/:id' ,component:CreareditarconsejoComponent
            },
            {
                path:'listadoid/:id' ,component:ListarconsejoidComponent
            }
        ],
        canActivate: [seguridadGuard],
        
    },
    {
        path:'alertas', component:AlertaComponent,
        children:[
            {
                path:'nuevo', component:CreareditaralertaComponent
            },
            {
                path:'ediciones4/:id' ,component:CreareditaralertaComponent
            },
            {
                path:'listadoid4/:id' ,component:ListaridalertaComponent
            }
        ],
        canActivate: [seguridadGuard],
    },
    {
        path:'zonaAlerta', component:ZonaalertaComponent,
        children:[
            {
                path:'nuevo', component:CreareditarzonaalertaComponent
            },
            {
                path:'ediciones3/:id' ,component:CreareditarzonaalertaComponent
            },
            {
                path:'listadoid3/:id' ,component:ListaridzonaalertaComponent
            }
        ],
        canActivate: [seguridadGuard],
    },
    {
        path:'zonacontactosayuda', component:ZonacontactoComponent,
        children:[
            {
                path:'nuevo', component:CreareditarzonacontactoComponent
            },
            {
                path:'ediciones5/:id' ,component:CreareditarzonacontactoComponent
            }
            
        ],
        canActivate: [seguridadGuard],
    },
    {
        path:'planesevacuacion', component:PlanDeEvacuacionComponent,
        children:[
            {
                path:'nuevo', component:CreareditarplanesComponent,
            },
            {
                path:'editar/:id' ,component:CreareditarplanesComponent
            }
        ],
        canActivate: [seguridadGuard],
    },
    {
        path:'simualcro', component:SimulacroComponent,
        children:[
            {
                path:'nuevo', component:CreareditarsimulacrosComponent,
            },
            {
                path:'ediciones3/:id',component:CreareditarsimulacrosComponent,
            },
            {
                path:'listadoid3/:id',component:ListaridsimulacroComponent,
            }
        ],
        canActivate: [seguridadGuard],
    },

    {
        path: 'home', component: HomeComponent

    },
    {
        path: 'reportes', component: ReportesComponent,
        children:[
            {
                path:'cantidadAlertasTipo', component:CantidadAlertasTipoComponent,
            },
            {
                path:'porNombreZona', component: ContactospornombrezonaComponent,
            },
            {
                path:'cantidadAlertasUsuario', component: UsuariosCantidadAlertasComponent,
            },
            {
                path:'cantidadAlertasZona', component: ZonasCantidadAlertasComponent,
            },
            {
                path:'planeporzona', component: ListarPlanesZonaComponent,
            },
            {
                path:'consejosportipo', component: ListarConsejosTipoComponent,
            },
        ],
        canActivate: [seguridadGuard],

    },
    {
        path: 'usuarios', component: UsuarioComponent,
        children:[
            {
                path:'nuevo', component:CreareditarusuariosComponent
            },
            {
                path:'ediciones1/:id', component:CreareditarusuariosComponent,
            },
            {
                path:'listadoid/:id', component: ListarusuarioidComponent,
            },
            {
                path:'configurar/:id', component:CreareditarusuariosComponent
            }
        ],
        canActivate: [seguridadGuard],
        

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
        ],
        canActivate: [seguridadGuard],
    },

    
];
