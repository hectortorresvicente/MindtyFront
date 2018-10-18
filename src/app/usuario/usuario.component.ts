import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { UserserviceService } from '../services/userservice.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private _usersService:UserserviceService) { }

  ngOnInit() {
    this._usersService.getUsersFromApi().subscribe(
      usuariosPrometidos => {
        this.usuarios = usuariosPrometidos;
      },
      error =>{
        console.log("Error en usuariosPrometidos:", error);
      }
    );
  }
  
}
