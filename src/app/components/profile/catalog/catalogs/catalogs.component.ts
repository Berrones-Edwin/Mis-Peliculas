import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackHttpError } from 'src/app/shared/interfaces/error/track-http-error';
import { AllList } from 'src/app/shared/interfaces/profile/List/all-list.interface';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  allLists$: Observable<AllList | TrackHttpError>;
  constructor(
    private _profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(): void {
    this.allLists$ = this._profileService.getAllList();
  }

}
