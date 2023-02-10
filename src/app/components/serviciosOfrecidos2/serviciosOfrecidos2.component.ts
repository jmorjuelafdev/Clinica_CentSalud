import { Component, OnInit } from '@angular/core';

import listadeProcedimientos from '/src/assets/json/serviciosOfrecidos.json';

@Component({
  selector: 'app-serviciosOfrecidos2',
  templateUrl: './serviciosOfrecidos2.component.html',
  styleUrls: ['./serviciosOfrecidos2.component.css']
})
export class ServiciosOfrecidos2Component implements OnInit {

  procedimientos: any = listadeProcedimientos;

  constructor() { }

  ngOnInit() {
  }

}
