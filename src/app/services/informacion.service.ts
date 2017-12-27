import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InformacionService {

  datosProfesionales: any = [];
  cargada: boolean = false;

  constructor(public http: Http) {

  }
}
