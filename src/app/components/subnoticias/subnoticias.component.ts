import { Component, OnInit } from '@angular/core';
import presentacion from '/src/assets/json/subnoticias.json';
import { ActivatedRoute, ParamMap } from '@angular/router';
import infodeNoticias from '/src/assets/json/subnoticias.json';
import { Comentario } from '../../comentario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subnoticias',
  templateUrl: './subnoticias.component.html',
  styleUrls: ['./subnoticias.component.css'],
})
export class SubnoticiasComponent implements OnInit {
  title = '¡Noticias en salud!';
  noticias: any = presentacion;
  noticiaSeleccionada: any;
  subtitle = 'Comentarios';
  titularAlerta: string = '';

  comentarios: Comentario[] = [];
  nombreInput: any = '';
  comentarioInput: any = '';
 

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      const nombreNoticia = parametros.get('tituloNoticia');

      if (nombreNoticia) {
        this.seleccionarNoticia(nombreNoticia);
      }
    });
  }
  seleccionarNoticia(titulo: string) {
    for (let noticia of infodeNoticias) {
      if (noticia.tituloNoticia === titulo) {
        this.noticiaSeleccionada = noticia;
        return;
      }
    }
  }
  agregarComentario() {
      let comentario1 = new Comentario(this.nombreInput, this.comentarioInput);
      this.comentarios.push(comentario1);
      console.log(this.nombreInput, this.comentarioInput);
      Swal.fire('¡Comentario ingresado!', 'Gracias por participar');
      Swal.update({
        icon: 'success',
      });
      if (this.nombreInput.length <= 0 && this.comentarioInput.length <= 0) {
        Swal.fire(
          '¡Escribe tu comentario!','Campo no puede quedar vacío');
        Swal.update({
          icon: 'error',
        });
      }
    }
}
