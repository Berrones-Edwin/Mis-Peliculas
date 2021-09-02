import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(public _authService: AuthService,private _router: Router) {}
  ngOnInit() {

    if(!this._authService.isAuth()){
      this._router.navigate(['/peliculas']);
    }

  }

  logout(){
    this._authService.logout();
  }
}
