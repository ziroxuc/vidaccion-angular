import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//router
import { APP_ROUTING } from './app.router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/home/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { ProfesionalesComponent } from './components/home/profesionales/profesionales.component';
import { UbicacionComponent } from './components/home/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    ProfesionalesComponent,
    UbicacionComponent,
    ContactoComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
