import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ConsejoService } from '../../../services/consejo.service';
import { Consejo } from '../../../models/Consejo';


@Component({
  selector: 'app-listarconsejo',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarconsejo.component.html',
  styleUrl: './listarconsejo.component.css'
})
export class ListarconsejoComponent implements OnInit{
  dataSource: MatTableDataSource<Consejo> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4']
  constructor(private cS: ConsejoService) {}

  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
    
  }
}
