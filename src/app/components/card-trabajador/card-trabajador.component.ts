import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Trabajador } from "./../../models/trabajador.model";

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {

  @Input() trabajador: Trabajador;
  @Output() likeTrabajador = new EventEmitter<number>();
  @Output() unLikeTrabajador = new EventEmitter<number>();
  @Output() borraTrabajador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    this.likeTrabajador.emit(this.trabajador.id);
  }

  unLike() {
    this.unLikeTrabajador.emit(this.trabajador.id);
  }

  eliminar() {
    this.borraTrabajador.emit(this.trabajador.id);
  }

}
