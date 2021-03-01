import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";

@Component({
  selector: "grid-favorites",
  templateUrl: "./grid-favorites.component.html",
  styles: [],
})
export class GridFavoritesComponent implements OnInit {
  @Input() favorites: Array<ListDetail>;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  getDetails(e) {
    // console.log(e)
    this._router.navigate(["/peliculas", e]);
  }
}
