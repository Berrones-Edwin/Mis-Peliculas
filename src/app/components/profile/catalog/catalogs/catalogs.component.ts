import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackHttpError } from 'src/app/shared/interfaces/error/track-http-error';
import { AllList } from 'src/app/shared/interfaces/profile/List/all-list.interface';
import { ListDetail } from 'src/app/shared/interfaces/profile/List/list-detail.interface';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
})
export class CatalogsComponent implements OnInit {
  allLists$: Observable<AllList | TrackHttpError>;
  list_id: number;
  list_details: ListDetail;
  id = 1;
  constructor(
    private _profileService: ProfileService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe((data) => {
      if (data.details) {this.list_id = data.details;}
      else if (data.id) {this.id = data.id;}
    });
  }

  ngOnInit(): void {
    if (this.list_id) {this.getDetailsList();}
    else if (this.id) {this.getLists(this.id.toString());}
    else {this.getLists();}
  }
  getLists(id?): void {
    this.allLists$ = this._profileService.getAllList(id);
  }
  getDetailsList() {
    this._profileService
      .getDetailsList(this.list_id)
      .subscribe((data: ListDetail) => {
        this.list_details = data;
      });
  }

  nextPage(page) {
    this.id = page;
    this._router
      .navigate(['profile/mis-catalogos', page])
      .then(() => this.getLists(page));
  }
}
