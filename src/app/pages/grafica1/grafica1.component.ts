import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  etiquetas1: string[] = ['Play Station 1', 'Play Station 2', 'Play Station 3'];
  data1: number[] = [350, 450, 100];

  etiquetas2: string[] = ['Juego 1', 'Juego 2', 'Juego 3'];
  data2: number[] = [10, 265, 409];

  etiquetas3: string[] = ['Accesorio 1', 'Accesorio 2', 'Accesorio 3'];
  data3: number[] = [600, 15, 90];

  etiquetas4: string[] = ['Juego 4', 'Juego 5', 'Juego 6'];
  data4: number[] = [45, 789, 15];
}
