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
export class NavbarComponent implements OnInit ,OnDestroy{

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {
    this.showLoginOrLogout = this._authService.session_id === null;
  }

  request_token: {};
  request_token_approved: string;
  session_id: string;
  showLoginOrLogout: boolean = false;

  ngOnInit() {
    // if(this.request_token)
    this.getTokenApproved();


  }

  getTokenApproved() {

    if (window.location.href.split('?')[1] !== undefined) {
      this.request_token_approved = window.location.href.split('?')[1].split('&')[0].split('=')[1];

      if (this.request_token_approved.length > 0)
        this.createNewSession(this.request_token_approved)
          .then((data) => {
            localStorage.setItem('session_id', data['session_id']);
          })
    }

  }

  login() {
    Swal.fire({
      title: 'Iniciar Sesión',
      text: 'En un momento sera redireccionado al formulario',
      type: 'info',
      confirmButtonText: 'Aceptar'
    })

    setTimeout(() => {

      this.getNewToken()
        .then((data) => {
          this.request_token = data;

          return this.getPermissionUser(this.request_token['request_token'])
        })
        .then((data) => {
          console.log(data)
        })
    }, 1000);

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


  getPermissionUser(token: string) {
    this._authService.getPermissionUser(token);
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

