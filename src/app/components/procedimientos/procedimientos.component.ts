import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import menuProcedimientos from '/src/assets/json/tabs.json';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {

  procedimientos: any = menuProcedimientos;

  constructor() { }

  ngOnInit() {
  }

}
