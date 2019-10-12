import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) {
  }

  token: {};
  ngOnInit() {
  }

  login() {
    this.getNewToken()
      .then((data) => {
        this.token = data;
        return this.getPermissionUser(this.token['request_token'])
      })
      .then((data) => {
        console.log(data)
      })

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

  getPermissionUser(token: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._authService.getPermissionUser(token).subscribe((data: any) => {
        if (data) resolve(data)
        else reject()
      },
        err => reject(err))
    })
  }

}

