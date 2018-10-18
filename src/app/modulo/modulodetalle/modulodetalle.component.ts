import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../../services/modulos.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Modulo } from '../../modelos/modulo';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-modulodetalle',
  templateUrl: './modulodetalle.component.html',
  styleUrls: ['./modulodetalle.component.css']
})
export class ModulodetalleComponent implements OnInit {

  moduloSeleccionado: Modulo;
  idModulo: number;
  idCurso: number;
  
  constructor(private _modulosService: ModulosService,private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(receivedParams => {
      this.idCurso = receivedParams['idc'];
      this.idModulo = receivedParams['idm'];
     console.log("Curso:" + this.idCurso +"Modulo:" + this.idModulo)
      this._modulosService.getModuloById(this.idCurso, this.idModulo).subscribe(moduloLeido => {
        this.moduloSeleccionado = moduloLeido;
        

        console.log(this.moduloSeleccionado)
      })

    })

  }

  onSubmitDelete(myForm: NgForm) {
    
    
   if (myForm.valid) {
      this._route.params.subscribe(receivedParams => {
        this.idCurso = receivedParams['idc'];
        this.idModulo = receivedParams['idm'];
        console.log("Curso:" + this.idCurso +"Modulo:" + this.idModulo)
        this._modulosService.deleteModuloApi(this.idCurso, this.idModulo).subscribe(newId => {
          if (newId){ 
            console.log("Eliminado");
            this._router.navigate(['/cursos/' + this.idCurso  + '/modulos']);
          }
          else console.log("error");
        })

      })
    }

  }

  onSubmitModi(myForm: NgForm) {
    
   
   
    if (myForm.valid) {
      this._route.params.subscribe(receivedParams => {
        this.idCurso = receivedParams['idc'];
        this.idModulo = receivedParams['idm'];

        this._modulosService.modiModuloApi(this.idCurso, this.idModulo,this.moduloSeleccionado).subscribe(newId => {
          if (newId){ 
            console.log("Modificado");
            
            this._router.navigate(['/cursos/' + this.idCurso  + '/modulos']);
          }
          else console.log("error");
        })

      })
    }

  }
}
