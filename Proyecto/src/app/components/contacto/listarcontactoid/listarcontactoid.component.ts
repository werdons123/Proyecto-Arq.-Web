import { Component, OnInit,ViewChild } from '@angular/core';
import { Contacto_ayuda} from '../../../models/Contacto_ayuda';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-listarcontactoid',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,MatPaginator,CommonModule,MatCardModule],
  templateUrl: './listarcontactoid.component.html',
  styleUrl: './listarcontactoid.component.css'
})
export class ListarcontactoidComponent implements OnInit{
  contacto: Contacto_ayuda = new Contacto_ayuda();
  id:number=0;

  constructor(private cS: ContactoAyudaService,
    private router: Router,
    private route: ActivatedRoute) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = +data['id'];
    });
    this.cS.listaId(this.id).subscribe((contacto) => {
      this.contacto = contacto;
    });
   
  }


}

