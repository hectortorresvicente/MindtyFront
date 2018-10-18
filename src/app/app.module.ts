import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CopyComponent } from './footer/copy/copy.component';
import { CursoComponent } from './curso/curso.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModulonewComponent } from './modulo/modulonew/modulonew.component';
import { ModulodetalleComponent } from './modulo/modulodetalle/modulodetalle.component';
import { CursodetalleComponent } from './curso/cursodetalle/cursodetalle.component';
import { CursonewComponent } from './curso/cursonew/cursonew.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarionewComponent } from './usuario/usuarionew/usuarionew.component';
import { UsuariodetalleComponent } from './usuario/usuariodetalle/usuariodetalle.component';
import { LoginComponent } from './login/login.component';
import {routingProv} from './routing';
import { MatButtonModule, MatCheckboxModule, MatSelect, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatListModule} from '@angular/material';
import { UserserviceService } from './services/userservice.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatRadioModule} from '@angular/material/radio';
import { DataSource } from '@angular/cdk/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CopyComponent,
    CursoComponent,
    ModuloComponent,
    ModulonewComponent,
    ModulodetalleComponent,
    CursodetalleComponent,
    CursonewComponent,
    UsuarioComponent,
    UsuarionewComponent,
    UsuariodetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingProv,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],

  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
