import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styles: []
})
export class TrabajadoresComponent {

  datosProfesionales: any = [];
  cargada: boolean = false;
  profesion: any;
  profesionales: any = [];
  url = '';


  constructor(private router: Router, private route: ActivatedRoute, public http: Http) {

    this.route.params.subscribe(params => {
      this.profesion = params['profesional']; // (+) converts string 'id' to a number
    });
    this.url = 'assets/data/' + this.profesion + '.json'
    this.http.get(this.url)
      .subscribe(data => {
        this.datosProfesionales = data.json().profesionales;
        this.cargada = true;

        console.log(this.datosProfesionales);

      });
   }
}











