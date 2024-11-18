import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { QuantityAlertsByUserDTO } from '../../../models/QuantityAlertsByUserDTO';
import { UsuarioService } from '../../../services/usuario.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-usuarios-cantidad-alertas',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './usuarios-cantidad-alertas.component.html',
  styleUrl: './usuarios-cantidad-alertas.component.css'
})
export class UsuariosCantidadAlertasComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  }
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];
  constructor(private uS: UsuarioService) {}
  
  ngOnInit(): void {
    this.uS.getalertasbyuser().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nombre);
      this.barChartData = [
        {
          data: data.map((item) => item.quantityAlertsByUser),
          label: 'Número de Alertas registradas por Usuario',
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
