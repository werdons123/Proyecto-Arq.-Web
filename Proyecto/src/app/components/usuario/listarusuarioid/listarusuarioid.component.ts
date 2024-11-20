import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-listarusuarioid',
  standalone: true,
  imports: [MatTableModule, 
    MatIconModule, 
    RouterLink,
    MatPaginator,
    CommonModule,
    MatCardModule],
  templateUrl: './listarusuarioid.component.html',
  styleUrl: './listarusuarioid.component.css'
})
export class ListarusuarioidComponent implements OnInit{
  usuario: Usuario = new Usuario();
  id:number=0;

  constructor(private uS: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.uS.listaId(this.id).subscribe((usuario) => {
      this.usuario = usuario;
    });
   
  }

}
