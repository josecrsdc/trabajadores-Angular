import { Component } from '@angular/core';

import { Trabajador } from "./models/trabajador.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Listado de Trabajadores';
  titleVotos = 'Trabajador más votado';
  topTrabajador: Trabajador[] = [];
  trabajadores: Trabajador[] = [
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:3
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
  ];

  ngOnInit(): void {
    this.masVotado();
  }

  sumaVoto(trabajadorId: number) {
    let trabajador = this.buscarTrabajador(trabajadorId);
    trabajador.votos++;
    this.masVotado();
  }

  restaVoto(trabajadorId: number) {
    let trabajador = this.buscarTrabajador(trabajadorId);
    if (trabajador.votos > 0) {
      trabajador.votos--;
    } else {
      alert("No se pueden restar votos");
    }
    this.masVotado();
  }

  borrar(trabajadorId: number) {
    let posTrabajador = this.buscarPosicion(trabajadorId);
    this.trabajadores.splice(posTrabajador, 1);
    this.masVotado();
  }

  masVotado() {
    let votos: number = 0;
    let maximo: Trabajador;
    this.topTrabajador = [];
    this.trabajadores.forEach(trabajador => {
      if (trabajador.votos > votos) {
        maximo = trabajador;
        votos = trabajador.votos;
      }
    });

    this.trabajadores.forEach(trabajador => {
      if (trabajador.votos == votos) {
        this.topTrabajador.push(trabajador);
      }
    });

    if (this.topTrabajador.length > 1) {
      this.topTrabajador = [];
    }
  }

  buscarPosicion(trabajadorId: number) {
    return this.trabajadores.findIndex(trabajador => trabajador.id == trabajadorId);
  }

  buscarTrabajador(trabajadorId: number) {
    return this.trabajadores.find(trabajador => trabajador.id == trabajadorId);
  }
}
