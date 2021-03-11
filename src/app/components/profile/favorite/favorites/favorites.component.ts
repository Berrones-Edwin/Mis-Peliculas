import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { AllList } from "src/app/shared/interfaces/profile/List/all-list.interface";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {
  allFavorites$: Observable<AllList | TrackHttpError>;
  favorite_id: number;
  favorite_details: ListDetail;
  id: number = 1;
  constructor(
    private _profileService: ProfileService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((data) => {
      this.id = data.id;
    });
  }

  ngOnInit(): void {
    if (this.id) this.getFavorites(this.id.toString());
    else this.getFavorites();
  }

  getFavorites(id?: string): void {
    this.allFavorites$ = this._profileService.getAllRateds(id);
  }

  nextPage(page) {
    this.id = page;
    this._router
      .navigate(["profile/favoritos", page])
      .then(() => this.getFavorites(page));
  }
}
