import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styles: []
})
export class TrabajadoresComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {
        
      route.params.subscribe(params => {
        console.log(params['profesional']);
      });
   }

  ngOnInit() {
  }

}
