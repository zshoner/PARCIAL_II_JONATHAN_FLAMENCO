import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-proceso',
  imports: [],
  templateUrl: './detalle-proceso.html',
  styleUrl: './detalle-proceso.css'
})
export class DetalleProcesoComponent implements OnInit {
  proceso: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.proceso = this.route.snapshot.params['proceso'];
  }
}
