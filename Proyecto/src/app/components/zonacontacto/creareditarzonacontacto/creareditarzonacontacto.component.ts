import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,FormControl} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Zona } from '../../../models/Zona';
import { Contacto_ayuda } from '../../../models/Contacto_ayuda';
import { Zona_contacto_ayuda } from '../../../models/Zona_contacto_ayuda';
import { ZonaContactoService } from '../../../services/zona-contacto.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ZonaService } from '../../../services/zona.service';
import { ContactoAyudaService } from '../../../services/contacto-ayuda.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creareditarzonacontacto',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './creareditarzonacontacto.component.html',
  styleUrl: './creareditarzonacontacto.component.css'
})
export class CreareditarzonacontactoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaZona: Zona[]=[];
  listaContactoAyuda: Contacto_ayuda[]=[];
  zoco: Zona_contacto_ayuda = new Zona_contacto_ayuda();
  edicion: boolean = false;
  id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private zcS: ZonaContactoService,
    private router: Router,
    private zS: ZonaService,
    private cS: ContactoAyudaService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
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
    this.form.markAllAsTouched();
    const zonaId = this.form.value.hzona;
  const contactoId = this.form.value.hcontacto;


    if (this.form.invalid) {
      this.snackBar.open('Complete correctamente el formulario', 'Cerrar', {
        duration: 3000, 
        panelClass: ['error-snack-bar']  
      });
      return;
    }
    this.zcS.list().subscribe((data) => {
      const existe = data.some(item => item.zo.nombre_zona === zonaId && item.coay.nombreInstitucion === contactoId);
      
      if (existe) {
        // Mostrar mensaje de error si ya existe la combinación
        this.snackBar.open('Esta combinación de zona y contacto ya ha sido registrada', 'Cerrar', {
          duration: 3000, 
          panelClass: ['error-snack-bar']  
        });
      } else {
        // Si no existe, proceder con el registro o actualización
        this.zoco.idZonaContactoAyuda = this.form.value.hcodigo;
        this.zoco.zo.id_Zona = zonaId;
        this.zoco.coay.idContactoAyuda = contactoId;
  
        if (this.edicion) {
          this.zcS.update(this.zoco).subscribe((data) => {
            this.zcS.list().subscribe((data) => {
              this.zcS.setList(data);
            });
          });
        } else {
          this.zcS.insert(this.zoco).subscribe((data) => {
            this.zcS.list().subscribe((data) => {
              this.zcS.setList(data);
            });
          });
        }
  
        this.router.navigate(['zonacontactosayuda']);
      }
    });
  }
  init() {
    if (this.edicion) {
  
      this.zcS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idZonaContactoAyuda),
          hzona: new FormControl(data.zo.nombre_zona),
          hcontacto: new FormControl(data.coay.nombreInstitucion),
        });
      });
    }
  }
}
