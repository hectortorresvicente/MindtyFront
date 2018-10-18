import { Component, OnInit } from '@angular/core';
import { Curso } from '../../modelos/curso';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { CursosService } from '../../services/cursos.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cursodetalle',
  templateUrl: './cursodetalle.component.html',
  styleUrls: ['./cursodetalle.component.css']
})
export class CursodetalleComponent implements OnInit {

  cursoSeleccionado: Curso;
  idCurso: number;
  constructor(private _cursosService: CursosService,private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(receivedParams => {
      this.idCurso = receivedParams['idc'];
     console.log("Curso:" + this.idCurso )
      this._cursosService.getCursoById(this.idCurso).subscribe(moduloLeido => {
        this.cursoSeleccionado = moduloLeido;
        

        console.log(this.cursoSeleccionado)
      })

    })

  }

  onSubmitDelete(myForm: NgForm) {
    
    
    if (myForm.valid) {
       this._route.params.subscribe(receivedParams => {
         this.idCurso = receivedParams['idc'];
        
         this._cursosService.deleteCursoApi(this.idCurso).subscribe(newId => {
           if (newId){ 
             console.log("Eliminado");
             this._router.navigate(['/cursos/']);
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
        this._cursosService.modiCursoApi(this.idCurso,this.cursoSeleccionado).subscribe(newId => {
          if (newId){ 
            console.log("Modificado");
            
            this._router.navigate(['/cursos/']);
          }
          else console.log("error");
        })

      })
    }

  }
}


