import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemListComponent {
  @Input() elementos: Item[] = [];
  @Output() seleccion = new EventEmitter<Item>();

  seleccionarItem(item: Item) {
    this.seleccion.emit(item);
  }
}
