import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Zona_Alerta } from '../../../models/Zona_Alerta';
import { MatButtonModule } from '@angular/material/button';
import { ZonaService } from '../../../services/zona.service';
import { Zona } from '../../../models/Zona';
import { ZonaalertaService } from '../../../services/zonaalerta.service';
import { Alerta } from '../../../models/Alerta';
import { AlertaService } from '../../../services/alerta.service';
@Component({
  selector: 'app-listaridzonaalerta',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,CommonModule],
  templateUrl: './listaridzonaalerta.component.html',
  styleUrl: './listaridzonaalerta.component.css'
})
export class ListaridzonaalertaComponent {
  Zona_Alerta: Zona_Alerta = new Zona_Alerta();
  id:number=0; 

  constructor(private zcS: ZonaalertaService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.zcS.listId(this.id).subscribe((zona_alerta) => {
      this.Zona_Alerta = zona_alerta;
    });
   
  }

}
