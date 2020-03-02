import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styles: []
})
export class CircularComponent implements OnInit {

// Doughnut
public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData: MultiDataSet = [
  [350, 450, 100],
  [50, 150, 120],
  [250, 130, 70],
];
public doughnutChartType: ChartType = 'doughnut';

constructor() { }

ngOnInit() {
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public numerosRandom(){
  console.log("data inicial"+ this.doughnutChartData);
  for(let i = 0; i < 3; i++){
    const data = [
      Math.round(Math.random() * 450),
      Math.round(Math.random() * 450),
      Math.round(Math.random() * 450)
    ];
    console.log("Va a setear");
    this.doughnutChartData[i] = data;
  }
  console.log("data final"+ this.doughnutChartData);
}
}
