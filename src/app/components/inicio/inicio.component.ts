import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title1 = '¡Especialistas en salud!';
  title2 = '¡Noticias en salud!';
  constructor() { }

  ngOnInit() {
  }

}
