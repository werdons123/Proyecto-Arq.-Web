import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ZonaContactoService } from '../../../services/zona-contacto.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buscarcontactoszona',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './buscarcontactoszona.component.html',
  styleUrls: ['./buscarcontactoszona.component.css'],
})
export class BuscarcontactoszonaComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  form: FormGroup = new FormGroup({});

  constructor(
    private zcS: ZonaContactoService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hnombre: ['', Validators.required],
    });
  }

  buscar(): void {
    this.dataSource = new MatTableDataSource<any>([]);
    const nombre = this.form.get('hnombre')?.value;
    if (nombre) {
      this.zcS.buscar(nombre).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }
}