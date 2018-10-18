import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso/curso.component';
import { CursonewComponent } from './curso/cursonew/cursonew.component';
import { CursodetalleComponent } from './curso/cursodetalle/cursodetalle.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModulonewComponent } from './modulo/modulonew/modulonew.component';
import { ModulodetalleComponent } from './modulo/modulodetalle/modulodetalle.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarionewComponent } from './usuario/usuarionew/usuarionew.component';
import { UsuariodetalleComponent } from './usuario/usuariodetalle/usuariodetalle.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: 'cursos', component: CursoComponent, pathMatch: 'full' },
    { path: 'cursos/new', component: CursonewComponent, pathMatch: 'full' },
    { path: 'cursos/:idc', component: CursodetalleComponent, pathMatch: 'full' },

    { path: 'cursos/:idc/modulos', component: ModuloComponent, pathMatch: 'full' },
    { path: 'cursos/:idc/modulos/new', component: ModulonewComponent, pathMatch: 'full' },
    { path: 'cursos/:idc/modulos/:idm', component: ModulodetalleComponent, pathMatch: 'full' },

    { path: 'usuarios', component: UsuarioComponent, pathMatch: 'full' },
    { path: 'usuarios/new', component: UsuarionewComponent, pathMatch: 'full' },
    { path: 'usuarios/:idu', component: UsuariodetalleComponent, pathMatch: 'full' },

    { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

export const routingProv: ModuleWithProviders = RouterModule.forRoot(appRoutes);