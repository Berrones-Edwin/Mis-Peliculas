import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { userLogin } from "src/app/shared/interfaces/auth/response-login";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { AllList } from "src/app/shared/interfaces/profile/List/all-list.interface";
import { AuthService } from "src/app/shared/services/auth.service";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  informationUser: userLogin;
  allLists$: Observable<AllList | TrackHttpError>;
  allFavorites$: Observable<AllList | TrackHttpError>;

  constructor(
    private _authService: AuthService,
    private _profileService: ProfileService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.informationUser = this._authService.UserData;
    this.getLists();
    this.getFavorites();
  }

  getLists(): void {
    this.allLists$ = this._profileService.getAllList();
  }
  getFavorites(): void {
    this.allFavorites$ = this._profileService.getAllRateds();
  }

  seeDetailsMovie(item) {
    this._router.navigate(["/peliculas", item]);
  }
}
