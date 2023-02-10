import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import listadeProcedimientos from '/src/assets/json/procedimientos.json';

@Component({
  selector: 'app-subprocedimientos',
  templateUrl: './subprocedimientos.component.html',
  styleUrls: ['./subprocedimientos.component.css']
})
export class SubprocedimientosComponent implements OnInit {
  servicioSeleccionado: any;
  instalaciones_proc: string ="Nuestras instalaciones en ";
  sedes_proc: string ="Nuestras sedes en ";


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      const nombreServicio = parametros.get("nombre_servicio");

      if (nombreServicio) {
        this.seleccionarServicio(nombreServicio)
      }
    })
  }
  seleccionarServicio(nombre: string) {
    for (let procedimiento of listadeProcedimientos) {
      if (procedimiento.nombre_servicio === nombre) {
        this.servicioSeleccionado = procedimiento
        return
      }
    }

  }
}

