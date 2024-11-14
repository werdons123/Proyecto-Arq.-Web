import { Component,OnInit,ViewChild, NgModule } from '@angular/core';
import { SimulacroService } from '../../../services/simulacro.service'; 
import { Simulacro} from '../../../models/Simulacro';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-listaridsimulacro',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,MatPaginator,CommonModule,MatCardModule],
  templateUrl: './listaridsimulacro.component.html',
  styleUrl: './listaridsimulacro.component.css'
})
export class ListaridsimulacroComponent {
  simulacro: Simulacro = new Simulacro();
  id:number=0;

  constructor(private sS: SimulacroService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.sS.listaId(this.id).subscribe((simulacro) => {
      this.simulacro = simulacro;
    });
   
  }

}
