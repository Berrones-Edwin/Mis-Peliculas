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

 
  isAuth:boolean;
  constructor(
    public _authService: AuthService
  ) {
   
  }
  ngOnInit() {
    this.isAuth = this._authService.isAuth() 
  }

 
  ngOnDestroy() {

  
  }


}

