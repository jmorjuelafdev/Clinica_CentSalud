import { Component, OnInit } from '@angular/core';
import listadeSedes from '/src/assets/json/sedes.json';


@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  title = '¡Especialistas en salud!';
  sedes:any= listadeSedes;
  

  constructor() { }

  ngOnInit() {
  }

}
