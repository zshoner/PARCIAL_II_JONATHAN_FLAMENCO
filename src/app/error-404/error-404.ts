import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [],
  templateUrl: './error-404.html',
  styleUrl: './error-404.css'
})
export class Error404Component {
  constructor(private router: Router) {}

  volverInicio() {
    this.router.navigate(['/']);
  }
}
