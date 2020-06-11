import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private _authService: AuthService
  ) { }

  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {


    if (this._authService.token === '') {


      Swal.fire({
        title: 'Error',
        text: 'Debes de haber iniciado sesión para ver este módulo.',
        type: 'error',
        confirmButtonText: 'Aceptar'
      });

      return false;
    }

    return true;
  }
}
