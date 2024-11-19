import { Component, OnInit, ViewChild} from '@angular/core';
import { Zona } from '../../../models/Zona';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ZonaService } from '../../../services/zona.service'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-listarzona',
  standalone: true,
  imports: [MatTableModule, 
    MatIconModule, 
    RouterLink, 
    MatPaginator, 
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './listarzona.component.html', 
  styleUrl: './listarzona.component.css'
})
export class ListarzonaComponent implements OnInit{
  dataSource: MatTableDataSource<Zona> = new MatTableDataSource();
  form: FormGroup; 
  noResults: boolean = false; 
  nombrebusqueda:string="";
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private zS: ZonaService,private fb: FormBuilder) {
    this.form = this.fb.group({
      nombrebusqueda: [''],
    });
  }

  ngOnInit(): void {
    this.zS.list().subscribe(data=>{
      
      this.dataSource=new MatTableDataSource(data);
      
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: 0, pageSize: 10 });
    
    });
    this.zS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.updatePaginator({ pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize });
    });
    this.form.get('nombrebusqueda')?.valueChanges.subscribe((value) => {
      this.nombrebusqueda = value; 
      this.buscarZonas(); 
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.zS.delete(id).subscribe((data) => {
      this.zS.list().subscribe((data) => {
        this.zS.setList(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = data;
        console.log('Longitud de los datos después de eliminación:', this.dataSource.data.length);
        if (this.dataSource.data.length === this.paginator.pageSize && this.paginator.pageIndex > 0) {
          console.log('Página vacía, retrocediendo...');
          this.paginator.pageIndex = Math.max(0, this.paginator.pageIndex - 1);
        }

        // Actualizar el paginador con los nuevos datos
        this.updatePaginator({
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
        });
      });
    });
  }
  buscarZonas() {
    // Obtener el valor actual del campo de búsqueda
    if (this.nombrebusqueda.trim()) {
      this.zS.search(this.nombrebusqueda).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.noResults = data.length === 0; // Verifica si hay resultados

      });
    } else {
      // Si el campo está vacío, puedes optar por mostrar todas las ciudades
      this.zS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.noResults = false; // Reinicia el estado

      });
    }
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }

}
