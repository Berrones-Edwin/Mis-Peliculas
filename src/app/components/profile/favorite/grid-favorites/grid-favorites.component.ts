import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ResponsePostItem } from "src/app/shared/interfaces/profile/item/response-post-iten.interface";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";
import { ResponsePostRated } from "src/app/shared/interfaces/profile/rateds/response-post-rated.interface";
import { GlobalService } from "src/app/shared/services/global.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import Swal from "sweetalert2";

@Component({
  selector: "grid-favorites",
  templateUrl: "./grid-favorites.component.html",
  styles: [],
})
export class GridFavoritesComponent implements OnInit {
  @Input() favorites: Array<ListDetail>;
  @Input() showHeaderAndButton: boolean = true;
  @Input() showPagination: boolean = true;

  @Input() page: number = 1;
  @Input() total_results: number;
  @Input() itemPerPage: number;

  @Output() number_page = new EventEmitter<any>();

  currentURL: string;

  constructor(
    private _router: Router,
    private _profileService: ProfileService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {}

  getDetails(e) {
    this._router.navigate(["/peliculas", e]);
  }

  deleteItem(id) {
    this.currentURL = this._router.url;
    Swal.fire({
      text: "¿Estas seguro que deseas eliminarlo?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      type: "question",
    }).then((result) => {
      if (result.value) {
        if (
          this.currentURL === "/profile/favoritos" ||
          this.currentURL === "/profile"
        )
          this.deleteFavorites(id);
        else this.deleteItemOfCatalog(id);
      }
      
    });
  }
  pageChange(event) {
    this.page = event;
    this.number_page.emit(event);
  }

  deleteFavorites(id: number) {
    this._profileService.deleteRated(id).subscribe(
      (data: ResponsePostRated) =>
        this._globalService
          .sweetAlert("Correcto", `${data.message}`, "success")
          .then(() => this.favorites = this.deleteItemOfArray(id)),
      (error) =>
        this._globalService.sweetAlert("Incorrecto", `${error}`, "error")
    );
  }
  deleteItemOfCatalog(id: number) {
    console.log(this.favorites)
    this._profileService.deleteItemToList(id).subscribe(
      (data: ResponsePostItem) =>
        this._globalService
          .sweetAlert("Correcto", `${data.message}`, "success")
          .then(() => this.favorites = this.deleteItemOfArray(id)),
      (error) =>
        this._globalService.sweetAlert("Incorrecto", `${error}`, "error")
    );
  }

  deleteItemOfArray(id:number):Array<ListDetail>{
    return this.favorites.filter(data=> data['id'] != id)
  }
}
