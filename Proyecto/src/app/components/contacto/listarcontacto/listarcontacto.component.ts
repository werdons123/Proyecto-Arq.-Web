import { Component, OnInit  } from '@angular/core';
import { Contacto_ayuda} from '../../../models/Contacto_ayuda';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service'; 
@Component({
  selector: 'app-listarcontacto',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarcontacto.component.html',
  styleUrl: './listarcontacto.component.css'
})
export class ListarcontactoComponent implements OnInit{
  dataSource: MatTableDataSource<Contacto_ayuda> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4']

  constructor(private cS: ContactoAyudaService) {}

  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
