import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Zona } from '../../../models/Zona';
import { Contacto_ayuda } from '../../../models/Contacto_ayuda';
import { Zona_contacto_ayuda } from '../../../models/Zona_contacto_ayuda';
import { ZonaContactoService } from '../../../services/zona-contacto.service';
import { Router } from '@angular/router';
import { ZonaService } from '../../../services/zona.service';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service';

@Component({
  selector: 'app-creareditarzonacontacto',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './creareditarzonacontacto.component.html',
  styleUrl: './creareditarzonacontacto.component.css'
})
export class CreareditarzonacontactoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaZona: Zona[]=[];
  listaContactoAyuda: Contacto_ayuda[]=[];
  zoco: Zona_contacto_ayuda = new Zona_contacto_ayuda();

  constructor(
    private formBuilder: FormBuilder,
    private zcS: ZonaContactoService,
    private router: Router,
    private zS: ZonaService,
    private cS: ContactoAyudaService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hzona: ['', Validators.required],
      hcontacto: ['', Validators.required],
    });
    this.zS.list().subscribe((data) => {
      this.listaZona = data;
    });
    this.cS.list().subscribe((data) => {
      this.listaContactoAyuda = data;
    });
  }
  insertar(): void {
    if (this.form.valid){
      this.zoco.zo = this.form.value.hzona;
      this.zoco.coay = this.form.value.hcontacto;
      this.zcS.insert(this.zoco).subscribe((data) => {
        this.zcS.list().subscribe((data) => {
          this.zcS.setList(data);
        });
      });
      this.router.navigate(['zonacontactosayuda']);
    }
  }
}
