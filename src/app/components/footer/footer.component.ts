import { Component, OnInit } from '@angular/core';
import infocontacto from '/src/assets/json/contactenos.json';
import { Comentario } from '../../comentario1.model';
import Swal from 'sweetalert2';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  contactenos1 = 'Contáctenos';
  escribenos = 'Escríbenos...';
  contactenos: any = infocontacto;
  comentarios: Comentario[] = [];
  comentarioInput:any = '';
  titularAlerta:any = '';
  copy='2022';
  empresa='Centsalud';

  constructor() {}

  ngOnInit(): void {}
  agregarComentario() {
    let comentario1 = new Comentario(this.comentarioInput);
    this.comentarios.push(comentario1);
    console.log(this.comentarioInput);
    Swal.fire('¡Mensaje recibido!', 'Tus comentarios fueron recibidos');
    Swal.update({
      icon: 'success',
    });
    if (this.comentarioInput.length <= 0) {
      Swal.fire(
        '¡Escribe tu comentario!','Campo no puede quedar vacío');
      Swal.update({
        icon: 'error',
      });
    }
  }
}
