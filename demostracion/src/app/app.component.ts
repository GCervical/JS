import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, SaludoComponent ],
  template: `
    <h1>¡Bienvenido a mi demostración Angular Standalone!</h1>

    <nav>
      <a routerLink="/">Inicio</a> |
      <a routerLink="/otra">Otra Ruta</a>
    </nav>

    <hr>

    <!-- Mostramos el componente Saludo -->
    <app-saludo></app-saludo>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

