import { Component } from '@angular/core';
import { Item } from '../item.model';
import { ItemListComponent } from '../item-list/item-list';
import { ItemDetailComponent } from '../item-detail/item-detail';

@Component({
  selector: 'app-dashboard',
  imports: [ItemListComponent, ItemDetailComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  listaItems: Item[] = [
    new Item(1, 'Proceso A', 'Descripción detallada del proceso A'),
    new Item(2, 'Proceso B', 'Descripción detallada del proceso B'),
    new Item(3, 'Proceso C', 'Descripción detallada del proceso C')
  ];

  itemSeleccionado: Item | null = null;

  recibirSeleccion(item: Item) {
    this.itemSeleccionado = item;
  }
}
