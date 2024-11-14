import { Component,OnInit } from '@angular/core';
import { ZonaContactoService  } from '../../../services/zona-contacto.service'; 
import { contactoDTO} from '../../../models/contactoDTO';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contactospornombrezona',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    RouterLink,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './contactospornombrezona.component.html',
  styleUrl: './contactospornombrezona.component.css'
})
export class ContactospornombrezonaComponent implements OnInit{
  dataSource: MatTableDataSource<contactoDTO> = new MatTableDataSource();
  form: FormGroup; 
  noResults: boolean = false; 
  nombrebusqueda:string=""
  constructor(private zcS: ZonaContactoService,private fb: FormBuilder) {
    this.form = this.fb.group({
      nombrebusqueda: [''],
    });
  }
  ngOnInit(): void {
    this.form.get('nombrebusqueda')?.valueChanges.subscribe((value) => {
      this.nombrebusqueda = value; 
    });
  }
  buscarContactosporZona() {
    // Obtener el valor actual del campo de búsqueda
    if (this.nombrebusqueda.trim()) {
      this.zcS.getcontactos(this.nombrebusqueda).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.noResults = data.length === 0; // Verifica si hay resultados

      });
    }
  }

}
