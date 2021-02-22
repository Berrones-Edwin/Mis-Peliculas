import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  constructor(public _authService: AuthService) {}
  ngOnInit() {
    this.isAuth = this._authService.isAuth();
  }
}
