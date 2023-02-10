import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import infodeSedes from '/src/assets/json/subsedes.json';
import listadeContactos from '/src/assets/json/subsedes.json';
import listadeEspecialidades from '/src/assets/json/subsedes.json';
import listadeProcedimientos from '/src/assets/json/subsedes.json';

@Component({
  selector: 'app-subsedes',
  templateUrl: './subsedes.component.html',
  styleUrls: ['./subsedes.component.css']
})
export class SubsedesComponent implements OnInit {
  title = '¡Especialistas en salud!';
  instalaciones_esp: string ="Nuestras instalaciones en ";
  services = 'Nuestros servicios';
  descripcion_esp = "Nuestras especialidades ";
  descripcion_proc = "Nuestros procedimientos";
  sedeSeleccionada: any;
  contactenos: any = listadeContactos;
  especialidades: any = listadeEspecialidades;
  procedimientos: any = listadeProcedimientos;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      const nombreSede = parametros.get("nombre_sede");

      if (nombreSede) {
        this.seleccionarSede(nombreSede)
      }
    })
  }
  seleccionarSede(nombre: string) {
    for (let sede of infodeSedes) {
      if (sede.nombre_sede === nombre) {
        this.sedeSeleccionada = sede
        return
      }
    }

  }
}




 