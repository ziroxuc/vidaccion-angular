import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  datosProfesionales :any = {};
  cargada:boolean = false;

  constructor(public http: Http) {

  this.http.get("assets/data/info-profesionales.json")
              .subscribe(data=>{
                this.datosProfesionales = data.json();
                this.cargada = true;
                
              })

              console.log(this.datosProfesionales)
   }

}
