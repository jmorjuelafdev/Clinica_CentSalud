import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import listadeEspecialidades from '/src/assets/json/especialidades.json';
import listadeSedes from '/src/assets/json/sedes.json';

@Component({
  selector: 'app-subespecialidades',
  templateUrl: './subespecialidades.component.html',
  styleUrls: ['./subespecialidades.component.css']
})
export class SubespecialidadesComponent implements OnInit {
  servicioSeleccionado: any;
  instalaciones_esp: string ="Nuestras instalaciones en ";
  sedes_esp: string ="Nuestras sedes en ";
  sedes:any= listadeSedes;


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
    for (let especialidad of listadeEspecialidades) {
      if (especialidad.nombre_servicio === nombre) {
        this.servicioSeleccionado = especialidad
        return
      }
    }

  }
}



