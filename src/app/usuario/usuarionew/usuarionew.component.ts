import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarionew',
  templateUrl: './usuarionew.component.html',
  styleUrls: ['./usuarionew.component.css']
  
})
export class UsuarionewComponent implements OnInit {
  newUseuario:Usuario= new Usuario(0,'','','','','');
 
  

  constructor(private _userserviceService:UserserviceService, private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(myForm:NgForm){
    console.log(myForm,this.newUseuario);
    if(myForm.valid){
      this._userserviceService.addUsuarioToApi(this.newUseuario).subscribe( newId=>{
        if(newId) this._router.navigate(['/usuarios']);
        else console.log("Error!");
      });
    }
  }
 
}
