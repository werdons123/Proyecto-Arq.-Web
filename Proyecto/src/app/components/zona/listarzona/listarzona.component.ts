import { Component, OnInit, ViewChild} from '@angular/core';
import { Zona } from '../../../models/Zona';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ZonaService } from '../../../services/zona.service'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listarzona',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink, MatPaginator, MatCardModule,CommonModule],
  templateUrl: './listarzona.component.html', 
  styleUrl: './listarzona.component.css'
})
export class ListarzonaComponent implements OnInit{
  dataSource: MatTableDataSource<Zona> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private zS: ZonaService) {}

  ngOnInit(): void {
    this.zS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.zS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  eliminar(id:number) {
    this.zS.delete(id).subscribe((data) => {
      this.zS.list().subscribe((data) => {
        this.zS.setList(data);

      });
    });
  }
  updatePaginator(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.filteredData = this.dataSource.data.slice(startIndex, endIndex);
  }

}
