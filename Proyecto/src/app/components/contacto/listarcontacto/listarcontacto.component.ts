import { Component, OnInit,ViewChild } from '@angular/core';
import { Contacto_ayuda} from '../../../models/Contacto_ayuda';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-listarcontacto',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,MatPaginator,CommonModule,MatCardModule],
  templateUrl: './listarcontacto.component.html',
  styleUrl: './listarcontacto.component.css'
})
export class ListarcontactoComponent implements OnInit{
  dataSource: MatTableDataSource<Contacto_ayuda> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: ContactoAyudaService) {}
 

  ngOnInit(): void {
    this.cS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.data = data;     
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data;
      
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
        this.dataSource.data = data;
      });
    });
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }
 

}
