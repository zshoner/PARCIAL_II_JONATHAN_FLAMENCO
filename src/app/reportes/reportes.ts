import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../datos.service';

@Component({
  imports: [FormsModule],
  selector: 'app-reportes',
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes implements OnInit {
  lista: string[] = [];
  id: number = 0;
  nuevoTexto: string = "";

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.lista = this.datosService.obtenerDatos();
  }

  modificar() {
    this.datosService.modificarDato(this.id, this.nuevoTexto);
    this.nuevoTexto = "";
  }
}
