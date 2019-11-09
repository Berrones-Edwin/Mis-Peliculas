import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  request_token: {};
  request_token_approved: string;
  session_id: string;

  ngOnInit() {
    // if(this.request_token)
    //   this.getTokenApproved();

    if (window.location.href.split('?')[1] !== undefined) {
      this.request_token_approved = window.location.href.split('?')[1].split('&')[0].split('=')[1];
      console.log(this.request_token_approved)

      if (this.request_token_approved.length > 0)
        this.createNewSession(this.request_token_approved)
          .then((data) => {
            this._authService.session_id = data['session_id'];
            console.log(this._authService.session_id)
            console.log(data['session_id'])
          })
    }
  }

  getTokenApproved() {

    console.log('aqui')
    // if(window.location.href.split('?')[1] === undefined || window.location.href.split('?')[1] === null)
    //   return;

    this.request_token_approved = window.location.href.split('?')[1].split('&')[0].split('=')[1];
    console.log(this.request_token_approved)

    if (this._authService.session_id.length > 0)
      this.createNewSession(this.request_token_approved)
        .then((data) => {
          this._authService.session_id = data['session_id'];
          console.log(this._authService.session_id)
        })

  }

  login() {
    this.getNewToken()
      .then((data) => {
        this.request_token = data;
        console.log(this.request_token);

        return this.getPermissionUser(this.request_token['request_token'])
      })
      .then((data) => {
        console.log(data)
      })

  }

  logout(){
    
  }

  getNewToken(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.getNewToken().subscribe((data: any) => {
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
      this._authService.createNewSession(requestToken).subscribe((data: any) => {
        if (data) resolve(data)
        else reject()
      },
        err => reject(err))
    })
  }

}

