import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private _apiAuth: string = 'http://mindty.tk:8080/mindtyapirest/api/authenticate';
  private _token:string;

  constructor(private _httpClient:HttpClient) { }

  authenticateUser(user:Usuario):Observable<string>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'email': user.email,
        'pass': user.password
      })
    };

    return this._httpClient.get<any>(this._apiAuth,httpOptions)
    .pipe(
      tap(
        data => {this._token = data.token; console.log("token:",this._token);},
        error => console.log('error:', error)

      )
    );
    
  }
  
  getToken():string{
    return this._token;
  }

}
