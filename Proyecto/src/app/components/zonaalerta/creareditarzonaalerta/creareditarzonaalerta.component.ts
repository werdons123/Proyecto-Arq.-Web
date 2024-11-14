import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Zona_Alerta } from '../../../models/Zona_Alerta';
import { MatButtonModule } from '@angular/material/button';
import { ZonaService } from '../../../services/zona.service';
import { Zona } from '../../../models/Zona';
import { ZonaalertaService } from '../../../services/zonaalerta.service';
import { Alerta } from '../../../models/Alerta';
import { AlertaService } from '../../../services/alerta.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-creareditarzonaalerta',
  standalone: true,
  imports: [MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './creareditarzonaalerta.component.html',
  styleUrl: './creareditarzonaalerta.component.css'
})
export class CreareditarzonaalertaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  listaZonas: Zona[] = [];
  listaAlertas: Alerta[] = [];
  zonaalerta: Zona_Alerta = new Zona_Alerta();
  edicion: boolean = false;
  id:number=0;


  constructor(
    private formBuilder: FormBuilder,
    private zaS: ZonaalertaService,
    private router: Router,
    private zoS: ZonaService,
    private alS: AlertaService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      hcodigo: [''],
      hzona: ['', Validators.required],
      halerta: ['', Validators.required],
    });
    this.zoS.list().subscribe((data) => {
      this.listaZonas = data;
    });
    this.alS.list().subscribe((data) => {
      this.listaAlertas = data;
    });
  }
  insertar2(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log("Formulario inválido.");
      return;
    }
    if ( this.form.valid) {
      this.zonaalerta.id_Zona = this.form.value.hcodigo;
      this.zonaalerta.zo.id_Zona = this.form.value.hzona;
      this.zonaalerta.al.id_alerta= this.form.value.halerta;
      if (this.edicion) {
        this.zaS.update(this.zonaalerta).subscribe((data) => {
          this.zaS.list().subscribe((data) => {
            this.zaS.setList(data);
          });
        });
      } else {
        this.zaS.insert(this.zonaalerta).subscribe((data) => {
          this.zaS.list().subscribe((data) => {
            this.zaS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['zonaAlerta']);
  }

  init() {
    if (this.edicion) {
      this.zaS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.id_Zona),
          hzona: new FormControl(data.zo.id_Zona),
          halerta: new FormControl(data.al.id_alerta),
        });
      });
    }
  }

}
