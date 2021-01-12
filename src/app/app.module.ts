import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './components/card-trabajador/card-trabajador.component';
import { MasVotadoComponent } from './components/mas-votado/mas-votado.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    MasVotadoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
