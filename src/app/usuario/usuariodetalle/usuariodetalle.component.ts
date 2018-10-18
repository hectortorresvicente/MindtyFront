import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Usuario } from '../../modelos/usuario';

import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-usuariodetalle',
  templateUrl: './usuariodetalle.component.html',
  styleUrls: ['./usuariodetalle.component.css']
})
export class UsuariodetalleComponent implements OnInit {
  unUsuario: Usuario;
  idUsuario: number;
  usuario: Usuario;
  usuarios: Usuario[];
  usuariosD: Usuario;
  editUsuario: Usuario;
  prue: Usuario[];

  modificandoUsuario: Usuario = new Usuario(0, '', '', '', '', '');




  private _apiUsuarios: string = 'http://localhost:8080/mindtyapirest/api/usuarios';
  private _usuariosObs: Observable<Usuario>;

  constructor(private _usersService: UserserviceService, private _route: ActivatedRoute, private _routerDos: Router) { }


  ngOnInit() {
    this._route.params.subscribe(receivedParams => {
      this.idUsuario = receivedParams['idu'];
      this.unUsuario = this._usersService.getUserById(this.idUsuario);
      console.log(this.unUsuario, "en get");
      this.editUsuario = this.unUsuario;
      console.log(this.editUsuario);

    })
  }
  // valorAPrue(){
  //   return this.prue=this.unUsuario;
  // }

  // getHeroes(): void {
  //   this._usersService.getUserById(idu)
  //     .subscribe(usuarios => this.usuarios = usuarios);
  // }
  delete(usuario: Usuario): void {

    console.log("entrando en eliminando usuario, -usuariodetalle.component-");
    console.log(usuario, "el usaurio");
    console.log(this.usuarios, "el usaurios, un array");
    console.log(usuario.idu, "el idu del usuario");

    // this.usuarios = this.usuarios.filter(h => h !== usuario);
    this._usersService.deleteUsuarioToApi(usuario.idu).subscribe();
    if (usuario.idu == null) {
      this._routerDos.navigate(['/usuarios']);
    } else {
      console.log("Error!");

    }

    console.log("eliminando usuario despues de pasar por -service- estamos otra vez en -usuariodetalle.component-");
    console.log(usuario, "el usaurio");
    console.log(this.usuarios, "el usaurios, un array");
    console.log(usuario.idu, "el idu del usuario");

  }
//   onSubmit(myForm: NgForm) { //es el put 

//     if (myForm.valid) {
//       this._route.params.subscribe(receivedParams => {
//         this.idUsuario = receivedParams['idu'];

//       console.log(this.unUsuario, " en put---enntrando en detalle componene, en unUsuario")
//       console.log(this.editUsuario, "en put---enntrando en detalle componene, en editUsuario")
//       this._usersService.updateUsuarioApi(this.editUsuario, this.usuariosD,this.idUsuario).subscribe(newId =>{
//         if (newId){ 
//           console.log("Modificado");
          
//          // this._route.navigate(['/usuarios/' + this.idUsuario]);
//         }
//         else console.log("error");

//       });
//     }
  

//   // onSubmitDos(myForm: NgForm) {
//   //   console.log("es el myForm",myForm, this.editUsuario.idu,this.editUsuario.nombreUsuario,"entradndo en onSubmit");
//   //   if (myForm.valid) {
//   //     this._usersService.updateUsuario(this.editUsuario)
//   //     console.log("enviando an service",this.editUsuario);
//   //   } else {
//   //     console.log("Error!")
//   //   };
//   //}


// // onSubmit(myForm: NgForm) {
// //   console.log("my formulario",myForm, "es el this de",this.modificandoUsuario,"entradndo en onSubmit");
// //   if (myForm.valid) {
// //     this._usersService.updateUsuario(this.modificandoUsuario).subscribe( newId=>{
// //       if(newId) this._routerDos.navigate(['/usuarios']);

// //     else console.log("Error!");

// //     });

// //   }
//   }
// }
}