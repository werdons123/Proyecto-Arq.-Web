import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';
import { ZonaService } from '../../../services/zona.service';
Chart.register(...registerables);
@Component({
  selector: 'app-zonas-cantidad-alertas',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './zonas-cantidad-alertas.component.html',
  styleUrl: './zonas-cantidad-alertas.component.css'
})
export class ZonasCantidadAlertasComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  }
  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private zS: ZonaService) {}
  
  ngOnInit(): void {
    this.zS.getalertasbyzona().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombre_zona);
      this.barChartData = [
        {
          data: data.map((item) => item.quantityAlertsByZone),
          label: 'Número de Alertas registradas por Zona',
          backgroundColor: [
            '#445cac',
            '#2e2ca5',
            '#6a79ad',
            '#FF6347',
            '#FF7F50',
            '#CD5C5C',
            '#D2691E',
            '#B22222',
            '#800000',
          ],
          borderColor: 'rgba(173, 216, 230, 1)',
          borderWidth: 1,
        },
      ];
    });
  }
}
