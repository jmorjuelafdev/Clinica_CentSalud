import { Component, OnInit } from '@angular/core';
import listadeNoticias from '/src/assets/json/noticias.json';

@Component({
  selector: 'app-menuNoticias',
  templateUrl: './menuNoticias.component.html',
  styleUrls: ['./menuNoticias.component.css']
})
export class MenuNoticiasComponent implements OnInit {
  title = 'Noticias en salud';
  noticias:any =listadeNoticias;

  constructor() { }

  ngOnInit() {
  }

}
