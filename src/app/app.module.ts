import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServiciosOfrecidosComponent } from './components/serviciosOfrecidos/serviciosOfrecidos.component';
import { ServiciosOfrecidos2Component } from './components/serviciosOfrecidos2/serviciosOfrecidos2.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ProcedimientosComponent } from './components/procedimientos/procedimientos.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SubespecialidadesComponent } from './components/subespecialidades/subespecialidades.component';
import { SubprocedimientosComponent } from './components/subprocedimientos/subprocedimientos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SubsedesComponent } from './components/subsedes/subsedes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SubnoticiasComponent } from './components/subnoticias/subnoticias.component';
import { MenuNoticiasComponent } from './components/menuNoticias/menuNoticias.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FooterComponent } from './components/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    SedesComponent,
    SubsedesComponent,
    NoticiasComponent,
    MenuNoticiasComponent,
    SubnoticiasComponent,
    InicioComponent,
    ServiciosComponent,
    ServiciosOfrecidosComponent,
    ServiciosOfrecidos2Component,
    EspecialidadesComponent,
    ProcedimientosComponent,
    SubespecialidadesComponent,
    SubprocedimientosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
