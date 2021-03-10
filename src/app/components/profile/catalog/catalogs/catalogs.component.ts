import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { AllList } from "src/app/shared/interfaces/profile/List/all-list.interface";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-catalogs",
  templateUrl: "./catalogs.component.html",
  styleUrls: ["./catalogs.component.css"],
})
export class CatalogsComponent implements OnInit {
  allLists$: Observable<AllList | TrackHttpError>;
  list_id: number;
  list_details: ListDetail;
  constructor(
    private _profileService: ProfileService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((data) => (this.list_id = data.id));
  }

  ngOnInit(): void {
    if (this.list_id) this.getDetailsList();
    else this.getLists();
  }
  getLists(): void {
    this.allLists$ = this._profileService.getAllList();
  }
  getDetailsList() {
    this._profileService
      .getDetailsList(this.list_id)
      .subscribe((data: ListDetail) => {
        this.list_details = data;
        console.log(this.list_details);
      });
  }
}
