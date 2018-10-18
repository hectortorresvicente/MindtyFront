import { Modulo } from "./modulo";
import { Usuario } from "./usuario";

export class Curso{
    
    codCurso:string;
    nombreCurso:string;
    horasCurso:string;
    idCurso:number;
    formador:Usuario;
    modulo:Modulo[];

    constructor(codCurso:string,nombreCurso:string, horasCurso:string,
        idCurso?:number,formador?:Usuario,modulo?:Modulo[]){
            this.codCurso=codCurso;
            this.nombreCurso=nombreCurso;
            this.horasCurso=horasCurso;
            this.idCurso=idCurso;
            this.formador=formador;
            this.modulo=modulo;
    }
}