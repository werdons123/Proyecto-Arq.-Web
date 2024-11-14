import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-listarusuario',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarusuario.component.html',
  styleUrl: './listarusuario.component.css'
})
export class ListarusuarioComponent {
  datasource: MatTableDataSource<Usuario> = new MatTableDataSource();
  constructor(private uS:UsuarioService){}
  ngOnInit(): void {
      this.uS.list().subscribe(data => {
        this.datasource=new MatTableDataSource(data)
      })
  }
}
