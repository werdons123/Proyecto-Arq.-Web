import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Consejo } from '../../../models/Consejo';
import { ConsejoService } from '../../../services/consejo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertaService } from '../../../services/alerta.service';
import { Alerta } from '../../../models/Alerta';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-creareditarconsejo',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './creareditarconsejo.component.html',
  styleUrl: './creareditarconsejo.component.css'
})
export class CreareditarconsejoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaAlertas: Alerta[] = [];
  consejo: Consejo = new Consejo();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cS: ConsejoService,
    private router: Router,
    private route:ActivatedRoute,
    private aS: AlertaService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      hcodigo: [''],
      htitulo: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      halerta: ['', Validators.required],
    });

    this.aS.list().subscribe((data) => {
      this.listaAlertas = data;
    });

  }
  insertar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log("Formulario inválido.");
      return;
    }
    if (this.form.valid) {
      this.consejo.id_Consejo = this.form.value.hcodigo;
      this.consejo.titulo = this.form.value.htitulo;
      this.consejo.descripcion = this.form.value.hdescripcion;
      this.consejo.al.id_alerta = this.form.value.halerta;
      if(this.edicion) {
        this.cS.update(this.consejo).subscribe((data) => {
          this.cS.list().subscribe((data)=> {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.consejo).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
    }
      
    }
    this.router.navigate(['consejos']);
  }
  init() {
    if(this.edicion) {
      this.cS.listaId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.id_Consejo),
          htitulo: new FormControl(data.titulo),
          hdescripcion: new FormControl(data.descripcion),
          halerta: new FormControl(data.al.id_alerta),
        });
      });
    }
  }
}
