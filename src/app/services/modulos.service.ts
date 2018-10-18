import { Injectable } from '@angular/core';
import { Modulo } from '../modelos/modulo';
import { Observable } from '../../../node_modules/rxjs';

import { TagPlaceholder } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { tap } from 'rxjs/operators';
import { error } from '../../../node_modules/@angular/compiler/src/util';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ModulosService {
  private _modulosCargados: Modulo[];
  //private _apiModulos: string = 'http://localhost:9090/mindtyapirest/api/cursos/';
  private _apiModulos: string = 'http://mindty.tk:8080/mindtyapirest/api/cursos/';
  private _ModulosObs: Observable<Modulo[]>;
  private _ModuloObs: Observable<Modulo>;
  private index: number;

  constructor(private _httpClient: HttpClient) { }

  getModulosFromApi(idCurso: number): Observable<Modulo[]> {

   /* if (this._modulosCargados) {
      this._ModulosObs = of(this._modulosCargados);
    } else if (this._ModulosObs) {

    }*/ 
      this._ModulosObs = this._httpClient.get<Modulo[]>(this._apiModulos + idCurso + "/modulos")
        .pipe(
          tap(
            data => {
              this._modulosCargados = data;
              localStorage.setItem('modulos', JSON.stringify(this._modulosCargados));
            },
            error => console.log('error', error)

          )
        );
    
    return this._ModulosObs;

  }

  getModuloById(idCurso: number, idm: number): Observable<Modulo> {


    this._ModuloObs = this._httpClient.get<Modulo>(this._apiModulos + idCurso + "/modulos/" + idm)
      .pipe(
        tap(
          data => {
            // this._modulosCargados=data.idm;

            localStorage.setItem('modulos', JSON.stringify(this._modulosCargados));


          },
          error => console.log('error', error)

        )
      );

    return this._ModuloObs;

  }
  addModuloApi(idCurso: number, nuevoModulo: Modulo): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.post<boolean>(this._apiModulos + idCurso + "/modulos", nuevoModulo, httpOptions)
      .pipe(
        tap(
          data => {
            //nuevoModulo=data;
            console.log("Datos añadidos" +data)
            this._modulosCargados.push(nuevoModulo);
          },
          error => console.log('error:', error)
        )
      );

  }


  deleteModuloApi(idCurso: number, idModulo: number): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.delete<boolean>(this._apiModulos + idCurso + "/modulos/" + idModulo, httpOptions)
      .pipe(
        tap(
          data => {
            //nuevoModulo.idm = data;
            console.log(this._apiModulos + idCurso + "/modulos")
            //this._modulosCargados.splice(nuevoModulo);
            this.index = -1;
            for (var i = 0, len = this._modulosCargados.length; i < len; i++) {
              console.log("Indice modulo:" + this._modulosCargados[i].idm + "Indice buscado" + idModulo);
              if (this._modulosCargados[i].idm.toString() === idModulo.toString()) {
                this.index = i;
                this._modulosCargados.splice(this.index,1);
                console.log("entro");
                break;
              }
            }
            console.log("Indice del modulo seleccionado:" + this.index);
            console.log("Modulos:" + this._modulosCargados);


          },
          error => console.log('error:', error)
        )
      );
  }



  modiModuloApi(idCurso: number, idModulo: number, moduloSeleccionado: Modulo): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.put<boolean>(this._apiModulos + idCurso + "/modulos/" + idModulo, moduloSeleccionado, httpOptions)
      .pipe(
        tap(
          data => {
            this.index = -1;
            for (var i = 0, len = this._modulosCargados.length; i < len; i++) {
              if (this._modulosCargados[i].idm.toString() === idModulo.toString()) {
                this._modulosCargados[i].nombreModulo = moduloSeleccionado.nombreModulo;
                break;
              }
            }
          },
          error => console.log('error:', error)
        )
      );
  }


}