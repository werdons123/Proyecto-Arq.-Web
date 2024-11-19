import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule,MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Zona } from '../../../models/Zona';
import { ZonaService } from '../../../services/zona.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject,of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { GoogleMap, MapMarker } from '@angular/google-maps'; 
import { MatSnackBar } from '@angular/material/snack-bar';
export function rangoLatitudValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Verifica si el valor es un número y está en el rango válido para latitudes
    if (value && !isNaN(value) && (value >= -90 && value <= 90)) {
      return null;  // Si es válido, no hay error
    }
    return { latitudInvalida: true };  // Si no es válido, retorna el error
  };
}

export function rangoLongitudValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Verifica si el valor es un número y está en el rango válido para longitudes
    if (value && !isNaN(value) && (value >= -180 && value <= 180)) {
      return null;  // Si es válido, no hay error
    }
    return { longitudInvalida: true };  // Si no es válido, retorna el error
  };
}
interface Lugar {
  nombre: string;
  ubicacion:string;
  lat: number;
  lng: number;
  placeId:string;
}

@Component({
  selector: 'app-creareditarzona',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    GoogleMap,
    MapMarker,
    
  ],
  templateUrl: './creareditarzona.component.html',
  styleUrl: './creareditarzona.component.css'
})

export class CreareditarzonaComponent implements OnInit{
  letraSubject: Subject<string> = new Subject<string>();
  letra: string = '';  
  lugares: Lugar[] = []; 
  lugarSeleccionado: Lugar | null = null; 
  form: FormGroup = new FormGroup({});
  zona:Zona = new Zona();
  id: number = 0;
  edicion: boolean = false;
  mapaCentro: google.maps.LatLngLiteral = { lat: -12.0464, lng: -77.0428 }; 
  mapZoom: number = 13;
  constructor(
    private zS: ZonaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
      this.letraSubject.pipe(
        debounceTime(500), 
        switchMap(letra => {
          if (letra.length > 0) {
            return this.buscarLugaresGoogle(letra);
          } else {
            return of([]); 
          }
        })
      ).subscribe((lugares) => {
        console.log('Lugares encontrados:', lugares);
        this.lugares = lugares;
        if (this.lugares.length > 0) {
          this.mapaCentro = { lat: this.lugares[0].lat, lng: this.lugares[0].lng };
        }
      });
    });

    this.form = this.formBuilder.group({
      hcodigo:[''],
      hnombre: ['', [Validators.required,Validators.maxLength(40), Validators.minLength(1)]],
      hdescripcion: ['', [Validators.required,Validators.maxLength(40), Validators.minLength(1)]],
      hubicacion: ['', [Validators.required,Validators.maxLength(80), Validators.minLength(1)]],
      hlatitud:['', [Validators.required,Validators.maxLength(80), Validators.minLength(1), rangoLatitudValidator()]],
      hlongitud:['', [Validators.required,Validators.maxLength(80), Validators.minLength(1),rangoLongitudValidator()]],
    });
  }
  insertar3(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.snackBar.open('Complete correctamente el formulario', 'Cerrar', {
        duration: 3000, 
        panelClass: ['error-snack-bar']  
      });
      return;
    }
    if ( this.form.valid) {
      this.zona.id_Zona = this.form.value.hcodigo;
      this.zona.nombre_zona = this.form.value.hnombre;
      this.zona.descripcion = this.form.value.hdescripcion;
      this.zona.ubicacion = this.form.value.hubicacion;
      this.zona.latitud = this.form.value.hlatitud;
      this.zona.longitud = this.form.value.hlongitud;
      if (this.edicion) {
        this.zS.update(this.zona).subscribe((data) => {
          this.zS.list().subscribe((data) => {
            this.zS.setList(data);
          });
        });
      } else {
        this.zS.insert(this.zona).subscribe((data) => {
          this.zS.list().subscribe((data) => {
            this.zS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['zonas']);
  }

  init() {
    if (this.edicion) {
      this.zS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.id_Zona),
          hnombre: new FormControl(data.nombre_zona),
          hdescripcion: new FormControl(data.descripcion),
          hubicacion: new FormControl(data.ubicacion),
          hlatitud: new FormControl(data.latitud),
          hlongitud: new FormControl(data.longitud),
        });
        this.mapaCentro = { lat: data.latitud, lng: data.longitud };
      });
    }
  }
  buscarLugaresGoogle(letra: string) {
    console.log('Buscando lugares para:', letra); // Debugging log
    return this.zS.getzonas(letra).pipe(
      switchMap(response => {
        console.log('Respuesta completa de la API:', response);
  
        if (response && response.predictions && Array.isArray(response.predictions) && response.predictions.length > 0) {
          const lugares: Lugar[] = response.predictions.map((prediction: any): Lugar | null => {
            if (prediction && prediction.description) {
              const lugar: Lugar = {
                nombre: prediction.structured_formatting.main_text,
                ubicacion:prediction.description,
                lat: 0,  // Inicializamos en 0 ya que la latitud y longitud se obtendrán después
                lng: 0,
                placeId: prediction.place_id  // Agregamos el place_id al objeto lugar
              };
              return lugar;
            }
            return null;
          }).filter((lugar: Lugar | null) => lugar !== null);
  
          return of(lugares);
        } else {
          return of([]);  // Si no hay resultados, devolvemos un array vacío
        }
      })
    );
  }
  seleccionarLugar(event: any): void {
    const lugarSeleccionado: Lugar = event.option.value;
  
    // Obtenemos el `place_id` del lugar seleccionado
    const placeId = lugarSeleccionado.placeId;  // Asumimos que tienes el `placeId` en el lugar seleccionado
    
    if (placeId) {
      // Llamamos a la API de Geocoding para obtener las coordenadas del lugar
      this.zS.getCoordinatesFromPlaceId(placeId).subscribe(response => {
        // Verificamos que la respuesta de la API tenga resultados
        if (response && response.results && response.results.length > 0) {
          // Extraemos las coordenadas de la respuesta de la API
          const latLng = response.results[0].geometry.location;
          
          // Actualizamos el formulario con la latitud y longitud
          this.form.patchValue({
            hnombre: lugarSeleccionado.nombre,
            hlatitud: latLng.lat,
            hlongitud: latLng.lng,
            hubicacion: lugarSeleccionado.ubicacion,
          });
  
          // También actualizamos el centro del mapa (si es necesario)
          this.mapaCentro = { lat: latLng.lat, lng: latLng.lng };
        }
      }, error => {
        console.error('Error al obtener coordenadas:', error);
      });
    }
  }
  buscarLugares(): void {
    const nombre = this.form.get('hnombre')?.value;
    console.log('Valor de hnombre:', nombre); // Debugging log
    this.letraSubject.next(nombre); 
  }
}
