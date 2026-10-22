import { Component, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  imports: [],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetailComponent {
  @Input() item: Item | null = null;
}
