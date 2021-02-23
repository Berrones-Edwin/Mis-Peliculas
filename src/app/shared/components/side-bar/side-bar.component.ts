import { Component, OnInit } from "@angular/core";
import { Genres } from "../../Data/Genres";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  genresMovies: any[] = [];
  genresSeries: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.genresMovies = Genres.Movies;
    this.genresSeries = Genres.TV;
  }
}
