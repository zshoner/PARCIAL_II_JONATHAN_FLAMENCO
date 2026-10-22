import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Procesos } from './procesos/procesos';
import { Reportes } from './reportes/reportes';

import { DetalleProcesoComponent } from './detalle-proceso/detalle-proceso';
import { Error404Component } from './error-404/error-404';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'inicio', component: Inicio },
  { path: 'procesos', component: Procesos },
  { path: 'reportes', component: Reportes },
  { path: 'proceso/:proceso', component: DetalleProcesoComponent },
  { path: '**', component: Error404Component }
];
