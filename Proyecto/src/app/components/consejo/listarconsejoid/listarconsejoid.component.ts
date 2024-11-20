import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Consejo } from '../../../models/Consejo';
import { ConsejoService } from '../../../services/consejo.service';

@Component({
  selector: 'app-listarconsejoid',
  standalone: true,
  imports: [MatTableModule, 
    MatIconModule, 
    RouterLink,
    MatPaginator,
    CommonModule,
    MatCardModule],
  templateUrl: './listarconsejoid.component.html',
  styleUrl: './listarconsejoid.component.css'
})
export class ListarconsejoidComponent implements OnInit{
  consejo: Consejo = new Consejo();
  id:number =0;

  constructor(private cS: ConsejoService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.cS.listaId(this.id).subscribe((consejo) => {
      this.consejo = consejo;
    });
  }

}
