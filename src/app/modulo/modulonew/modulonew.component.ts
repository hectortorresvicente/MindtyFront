import { Component, OnInit } from '@angular/core';
import { Modulo } from '../../modelos/modulo';
import { ModulosService } from '../../services/modulos.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-modulonew',
  templateUrl: './modulonew.component.html',
  styleUrls: ['./modulonew.component.css']
})
export class ModulonewComponent implements OnInit {


  newmodulo: Modulo = new Modulo(0, '');
  idCurso: number;
  constructor(private _modulosService: ModulosService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {

  }

  onSubmit(myForm: NgForm) {
   // console.log(myForm, this.newmodulo);
    
    if (myForm.valid) {
      this._route.params.subscribe(receivedParams => {
        this.idCurso = receivedParams['idc'];

        this._modulosService.addModuloApi(this.idCurso, this.newmodulo).subscribe(correcto => {
          if (correcto){
              this._router.navigate(['/cursos/' + this.idCurso  + '/modulos']);
          }// 
          else console.log("error");
        })

      })
    }

  }
}