import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      Swal.fire({
        title: 'Error',
        text: 'No puedes acceder a estas rutas si no has iniciado sesión.',
        type: 'error',
        confirmButtonText: 'Aceptar'
      });
  
    return false;
  }
}
