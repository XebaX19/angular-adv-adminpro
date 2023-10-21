import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  private settingsService = inject(SettingsService);

  ngOnInit() {
    customInitFunctions(); //Es una funcion global (definida en /assets/js/custom.js), para que Angular no marque error la debo declarar (linea 4)
  }
}
