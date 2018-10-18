import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario'
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario (0,'','','','','');
  errorForm: boolean = false;
  errorServer: boolean = false;

  constructor(private _authService: AuthserviceService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    //console.log(loginForm, this.usuario);
    if (loginForm.valid) {
      this._authService.authenticateUser(this.usuario).subscribe(
        token => { this._router.navigate(['/tareas']) },
        error => { this.errorServer = true; }
      );
    } else {
      this.errorForm = true;
    }
  }

}
