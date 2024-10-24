import { Rol } from "./Rol";

export class Usuario {
  idUsuario: number = 0;
  nombre: string = '';
  apellidos: string = '';
  fechanacimiento: Date = new Date(Date.now());
  correo: string = '';
  ruc?: string;
  direccion?: string;
  telefono: string = '';
  username: string = '';
  password: string = '';
  ro?: Rol;
}