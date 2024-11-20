import { Component, OnInit } from '@angular/core';
import { ConsejoService } from '../../../services/consejo.service';
import { Consejo } from '../../../models/Consejo'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-consejos-tipo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './listar-consejos-tipo.component.html',
  styleUrl: './listar-consejos-tipo.component.css'
})
export class ListarConsejosTipoComponent implements OnInit {
  tipoSeleccionado: string = '';
  consejos: Consejo[] = [];
  tiposDesastre: string[] = ['Terremoto', 'Inundación', 'Incendio']; // Ajusta según tu base de datos
  consultaRealizada: boolean = false;

  constructor(private cS: ConsejoService) {}

  ngOnInit(): void {}

  cargarConsejos(): void {
    if (this.tipoSeleccionado) {
      this.cS.buscarPorTipo(this.tipoSeleccionado).subscribe((data) => {
        this.consejos = data;
        this.consultaRealizada = true;
      });
    }
  }
}
