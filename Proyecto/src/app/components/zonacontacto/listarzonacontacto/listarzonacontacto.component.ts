import { Component } from '@angular/core';
import { Zona_contacto_ayuda } from '../../../models/Zona_contacto_ayuda';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ZonaContactoService  } from '../../../services/zona-contacto.service'; 

@Component({
  selector: 'app-listarzonacontacto',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarzonacontacto.component.html',
  styleUrl: './listarzonacontacto.component.css'
})
export class ListarzonacontactoComponent {
  dataSource: MatTableDataSource<Zona_contacto_ayuda> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3']

  constructor(private zcS: ZonaContactoService) {}

  ngOnInit(): void {
    this.zcS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
