import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Curso } from '../../modelos/curso';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cursonew',
  templateUrl: './cursonew.component.html',
  styleUrls: ['./cursonew.component.css']
})
export class CursonewComponent implements OnInit {

  newcurso: Curso = new Curso('', '', '');

  constructor(private _cursosService: CursosService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    // console.log(myForm, this.newmodulo);

    if (myForm.valid) {


      this._cursosService.addCursoApi(this.newcurso).subscribe(correcto => {
        if (correcto) {
          this._router.navigate(['/cursos/']);
        }// 
        else console.log("error");
      })


    }

  }

}
