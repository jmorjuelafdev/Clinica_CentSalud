import { Component, OnInit } from '@angular/core';
import listadeNoticias from '/src/assets/json/noticias.json';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  title = '¡Noticias en salud!';
  noticias:any =listadeNoticias;
  constructor() { }

  ngOnInit() {
  }

}
