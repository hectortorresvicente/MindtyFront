import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Curso } from '../modelos/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: Curso[];
  idCurso: number;
  constructor(private _cursosService: CursosService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {

    this._cursosService.getCursosFromApi().subscribe(cursoLeido => {
      this.cursos = cursoLeido;
    })
  }

}
