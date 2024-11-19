import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../../../services/alerta.service';
import { Alerta } from '../../../models/Alerta';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listaridalerta',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,CommonModule],
  templateUrl: './listaridalerta.component.html',
  styleUrl: './listaridalerta.component.css'
})
export class ListaridalertaComponent implements OnInit {
  alerta: Alerta = new Alerta();
  id:number=0; 

  constructor(private aS: AlertaService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.aS.listId(this.id).subscribe((alerta) => {
      this.alerta = alerta;
    });
   
  }

}
