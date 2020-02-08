import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
   
  }

  request_token: {};
  request_token_approved: string;
  session_id: string;

  ngOnInit() {

  }

  login() {
    Swal.fire({
      title: 'Iniciar Sesión',
      text: 'En un momento sera redireccionado al formulario',
      type: 'info',
      confirmButtonText: 'Aceptar'
    })

      this.getNewToken()
        .then((data) => {

          this.request_token = data;
          return this.createSessionLogin('edwinivan', 'berrones12', this.request_token['request_token']
          );

        })
        .then((data) => {
          console.log(data)
          return this.createNewSession(data['request_token'])
        })
        .then((data) => {
          // Guardar el session ID
          if (data) {
            localStorage.setItem('session_id', data['session_id']);
            this._authService.session_id = data['session_id'];

          }
          else {
            console.error('Datos incorrectos');
          }

        })

  }

  cancelUser() {


    this.invalidateUser(this._authService.session_id)
      .then((data) => {

        if (data['success'] === true) {

          this._authService.session_id = "";
          this.router.navigate(['/'])
            .then(() => {
              localStorage.removeItem('session_id')
              this._authService.session_id = null;
            });


          Swal.fire({
            title: 'Cerrar Sesión',
            text: 'Se cerró la sesión correctamente',
            type: 'success',
            confirmButtonText: 'Aceptar'
          })
        }
      });
  }

  getNewToken(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.getNewToken()
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject()
        },
          err => reject(err))
    })
  }

  createSessionLogin(username: string, password: string, requestToken: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.createSessionLogin(username, password, requestToken)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject()
        },
          err => reject(err))
    })
  }


  createNewSession(requestToken: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.createNewSession(requestToken)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject()
        },
          err => reject(err))
    })
  }

  invalidateUser(session_id: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.logout(session_id)
        .pipe(
          takeUntil(this.unsubscribe$)
        )
        .subscribe((data: any) => {
          if (data) resolve(data)
          else reject()
        }, err => reject(err))
    });
  }

  ngOnDestroy() {

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}

