import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {
  @Input() titulo: string = 'Sin título';
  @Input() etiquetas: string[] = [];
  @Input() data: number[] = [];

  // public doughnutChartLabels: string[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];
  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    //labels: this.doughnutChartLabels,
    datasets: [
      //{ data: this.data, backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.etiquetas,
      datasets: [
        { data: this.data, backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
      ]
    }
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
