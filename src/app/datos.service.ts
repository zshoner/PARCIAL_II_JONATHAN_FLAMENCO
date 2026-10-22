import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class DatosService {
  private lista: string[] = ['Primer proceso', 'EJECUCION'];

  obtenerDatos(): string[] {
    return this.lista;
  }

  agregarDato(nuevo: string) {
    this.lista.push(nuevo);
  }

  modificarDato(indice: number, nuevo: string) {
    if (this.lista[indice] !== undefined) {
      this.lista[indice] = nuevo;
    }
  }
}
