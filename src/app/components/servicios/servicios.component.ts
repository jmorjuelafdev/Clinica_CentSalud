import { Component, OnInit } from '@angular/core';

// Importar el archivo JSON 

import menuEspecialidades from '/src/assets/json/tabs.json';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  title = '¡Especialistas en salud!';
  subtitle1='¡Te invitamos a conocer nuestros servicios ambulatorios de primer y segundo nivel en IPS CENTSALUD!';
  subtitle2='Apoyo diagnóstico, procedimientos y especialidades clínicas.'
  tabs: any = menuEspecialidades;
  activeLink = this.tabs[1];

  constructor() { }

  ngOnInit() {
  }

}
