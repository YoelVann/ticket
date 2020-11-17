import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chartclientes',
  templateUrl: './chartclientes.component.html',
  styleUrls: ['./chartclientes.component.css']
})
export class ChartClientesComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Platino', 'VIP', 'Intermedio', 'Base'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100,30] 
  
 ];
 public doughnutChartType: ChartType = 'doughnut';

 constructor() { }

 ngOnInit(): void {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }
}
