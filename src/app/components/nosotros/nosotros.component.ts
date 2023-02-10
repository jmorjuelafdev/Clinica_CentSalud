import { Component, OnInit } from '@angular/core';
import presentacion from '/src/assets/json/nosotros.json';
import listadeValores from '/src/assets/json/nosotros.json';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  title = '¡Especialistas en salud!';
  piedefoto ='QUIENES SOMOS';
  nosotros:any =presentacion;
  mision = 'Misión';
  vision= 'Visión';
  titulo_valores = 'Valores corporativos';
  valores:any =listadeValores;
  constructor() { }

  ngOnInit() {
  }

}
