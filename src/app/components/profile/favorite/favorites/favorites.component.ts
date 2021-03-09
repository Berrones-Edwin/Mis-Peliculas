import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { AllList } from "src/app/shared/interfaces/profile/List/all-list.interface";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {
  allFavorites$: Observable<AllList | TrackHttpError>;
  constructor(private _profileService: ProfileService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.allFavorites$ = this._profileService.getAllRateds();
  }
}
