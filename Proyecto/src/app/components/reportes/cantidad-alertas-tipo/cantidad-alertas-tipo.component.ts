import { Component, OnInit } from '@angular/core';

import {
  ChartDataset,
  ChartOptions,
  ChartType,
} from './../../../../../node_modules/chart.js/dist/types/index.d';
import { AlertaService } from '../../../services/alerta.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-cantidad-alertas-tipo',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './cantidad-alertas-tipo.component.html',
  styleUrl: './cantidad-alertas-tipo.component.css',
})
export class CantidadAlertasTipoComponent implements OnInit{
  barCharOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barCharType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private aS: AlertaService) {}

  ngOnInit(): void {
    this.aS.cantidadPorTipo().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.tipoDesastre);
      this.barChartData = [
        {
          data: data.map((item) => item.cantidad),
          label: 'Cantidad de alertas',
          backgroundColor: ['#d1b4ef', '#8C30F5', '#18191F'],
          borderWidth: 1,
        },
      ];
    });
  }
}
