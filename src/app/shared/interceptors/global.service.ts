import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class GlobalService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }

  manejarError(err: HttpErrorResponse) {
    Swal.fire({
      title: "Ocurrio un error",
      text: "Favor de recargar la página. En caso de volver a fallar pongase en contacto con el administrador en la pestaña contacto.",
      type: "error",
      confirmButtonText: "Aceptar",
    });

    return throwError(
      `Nombre Error: ${err.name}. Mensaje: ${err.message}. Status ${err.status}`
    );
  }
}
