import { CanActivateFn, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const clienteGuard: CanActivateFn = (  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const lService = inject(LoginService);
  const router = inject(Router);
  
  // Verifica si el usuario tiene el rol "CLIENTE"
  const role = lService.getUserRole();  // Usamos showRole para obtener el rol del usuario
  console.log('Role:', role);
  
  // Si el rol es CLIENTE, redirige a otra página (por ejemplo, home)
  if (role === 'CLIENTE') {
    console.log('Redirigiendo a /principal porque el rol es CLIENTE');
    router.navigate(['/principal']);  // Redirige al home o cualquier ruta predeterminada
     return false;  // Bloquea la navegación a la ruta solicitada
  }

  // Si el rol no es CLIENTE, permite la navegación
  return true;

};
