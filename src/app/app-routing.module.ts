import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //Para no perder las rutas entre módulos, es una buena práctica colocar los path y los routings donde los encuentro:
  // path: '/dashboard'   --> PagesRoutingModule
  // path: '/auth'       --> AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Si ingresa a la ruta raíz, redirecciona al dashboard
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
