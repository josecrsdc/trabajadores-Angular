import { Component, Input, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/models/trabajador.model';

@Component({
  selector: 'app-mas-votado',
  templateUrl: './mas-votado.component.html',
  styleUrls: ['./mas-votado.component.css']
})
export class MasVotadoComponent implements OnInit {

  @Input() trabajador: Trabajador;

  constructor() { }

  ngOnInit(): void {
  }


}
