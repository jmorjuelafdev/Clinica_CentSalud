import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import listadeEspecialidades from '/src/assets/json/tabs.json';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  especialidades: any = listadeEspecialidades;

  constructor() { }

  ngOnInit() {
  }
}
