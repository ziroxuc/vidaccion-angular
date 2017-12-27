import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styles: []
})
export class TrabajadoresComponent {

  parametro:any = null;
  profesionales:any = {};

  constructor(private router: Router,private route: ActivatedRoute,  _is: InformacionService) {

      route.params.subscribe(params => {
        this.parametro = params['profesional'];
      });

      console.log(_is.datosProfesionales.profesionales);

  
   }


   //getProfesionales(profesion:string){
       //    for (let item of datosProfesionales) {
       //   if(item.profesion === prof){
       //     console.log(item);
      //    }
    //  }
   }



