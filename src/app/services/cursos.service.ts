import { Injectable } from '@angular/core';
import { Curso } from '../modelos/curso';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private _cursosCargados: Curso[];
  private _apiCursos: string = 'http://mindty.tk:8080/mindtyapirest/api/cursos/';
  //private _apiCursos: string = 'http://localhost:8080/mindtyapirest/api/cursos/';
  private _CursosObs: Observable<Curso[]>;
  private _CursoObs: Observable<Curso>;
  private index: number;

  constructor(private _httpClient: HttpClient) { }


  getCursosFromApi(): Observable<Curso[]> {

    /* if (this._modulosCargados) {
       this._ModulosObs = of(this._modulosCargados);
     } else if (this._ModulosObs) {
 
     }*/
    this._CursosObs = this._httpClient.get<Curso[]>(this._apiCursos)
      .pipe(
        tap(
          data => {
            this._cursosCargados = data;
            localStorage.setItem('modulos', JSON.stringify(this._cursosCargados));
          },
          error => console.log('error', error)

        )
      );

    return this._CursosObs;

  }


  addCursoApi(nuevoCurso: Curso): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.post<boolean>(this._apiCursos, nuevoCurso, httpOptions)
      .pipe(
        tap(
          data => {

            console.log("Datos añadidos" + data)
            this._cursosCargados.push(nuevoCurso);
          },
          error => console.log('error:', error)
        )
      );

  }

  getCursoById(idCurso: number): Observable<Curso> {


    this._CursoObs = this._httpClient.get<Curso>(this._apiCursos + idCurso)
      .pipe(
        tap(
          data => {
            // this._modulosCargados=data.idm;

            localStorage.setItem('modulos', JSON.stringify(this._cursosCargados));


          },
          error => console.log('error', error)

        )
      );

    return this._CursoObs;

  }


  deleteCursoApi(idCurso: number): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.delete<boolean>(this._apiCursos + idCurso, httpOptions)
      .pipe(
        tap(
          data => {
            //nuevoModulo.idm = data;

            //this._modulosCargados.splice(nuevoModulo);
            this.index = -1;
            for (var i = 0, len = this._cursosCargados.length; i < len; i++) {
              //console.log("Indice modulo:" + this._modulosCargados[i].idm + "Indice buscado" + idModulo);
              if (this._cursosCargados[i].idCurso.toString() === idCurso.toString()) {
                this.index = i;
                this._cursosCargados.splice(this.index, 1);
                console.log("entro");
                break;
              }
            }



          },
          error => console.log('error:', error)
        )
      );
  }


  modiCursoApi(idCurso: number, cursoSeleccionado: Curso): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._httpClient.put<boolean>(this._apiCursos + idCurso , cursoSeleccionado, httpOptions)
      .pipe(
        tap(
          data => {
            this.index = -1;
            for (var i = 0, len = this._cursosCargados.length; i < len; i++) {
              if (this._cursosCargados[i].idCurso.toString() === idCurso.toString()) {
                this._cursosCargados[i].nombreCurso = cursoSeleccionado.nombreCurso;
                this._cursosCargados[i].horasCurso = cursoSeleccionado.horasCurso;
                break;
              }
            }
          },
          error => console.log('error:', error)
        )
      );
  }
}
