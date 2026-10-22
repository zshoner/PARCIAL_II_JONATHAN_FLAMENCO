import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../datos.service';

@Component({
  imports: [FormsModule],
  selector: 'app-procesos',
  templateUrl: './procesos.html',
  styleUrl: './procesos.css'
})



export class Procesos implements OnInit {
  lista: string[] = [];
  nuevoTexto: string = "";


  constructor(private datosService: DatosService) {}


  ngOnInit() {
    this.lista = this.datosService.obtenerDatos();
  }

  agregar() {
    if (this.nuevoTexto.trim() !== '') {
      this.datosService.agregarDato(this.nuevoTexto);
      this.nuevoTexto = "";
    }
  }
}
