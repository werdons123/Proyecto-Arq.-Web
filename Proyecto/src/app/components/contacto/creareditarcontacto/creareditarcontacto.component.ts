import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Contacto_ayuda } from '../../../models/Contacto_ayuda';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-creareditarcontacto',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './creareditarcontacto.component.html',
  styleUrl: './creareditarcontacto.component.css'
})
export class CreareditarcontactoComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  contacto: Contacto_ayuda = new Contacto_ayuda();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private cS: ContactoAyudaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data ['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(1)]],
      hdescripcion: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(1)]],
      htelefono: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }
  insertar(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log("Formulario inválido.");
      return;
    }
    if(this.form.valid) {
      this.contacto.idContactoAyuda = this.form.value.hcodigo;
      this.contacto.nombreInstitucion = this.form.value.hnombre;
      this.contacto.descripcion = this.form.value.hdescripcion;
      this.contacto.telefono = this.form.value.htelefono;
      if(this.edicion) {
        this.cS.update(this.contacto).subscribe((data) => {
          this.cS.list().subscribe((data)=> {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.contacto).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });

      }
      
    
    }
    this.router.navigate(['contactoayuda']);
  }

  init() {
    if(this.edicion) {
      this.cS.listaId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idContactoAyuda),
          hnombre: new FormControl(data.nombreInstitucion),
          hdescripcion: new FormControl(data.descripcion),
          htelefono: new FormControl(data.telefono),
        });
      });
    }
  }
}