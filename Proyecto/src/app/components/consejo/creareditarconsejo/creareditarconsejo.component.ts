import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Consejo } from '../../../models/Consejo';
import { ConsejoService } from '../../../services/consejo.service';
import { Router } from '@angular/router';
import { AlertaService } from '../../../services/alerta.service';
import { Alerta } from '../../../models/Alerta';

@Component({
  selector: 'app-creareditarconsejo',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './creareditarconsejo.component.html',
  styleUrl: './creareditarconsejo.component.css'
})
export class CreareditarconsejoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaAlertas: Alerta[] =[];
  cons: Consejo = new Consejo();

  constructor(
    private formBuilder: FormBuilder,
    private cS: ConsejoService,
    private router: Router,
    private aS: AlertaService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      htitulo: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      halerta: ['', Validators.required],
    });
    this.aS.list().subscribe((data) => {
        this.listaAlertas = data;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.cons.titulo = this.form.value.htitulo;
      this.cons.descripcion = this.form.value.hdescripcion;
      this.cons.al.id_alerta = this.form.value.halerta;
      this.cS.insert(this.cons).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
      this.router.navigate(['consejos']);
    }
  }
  

}
