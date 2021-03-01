import { Component, Input, OnInit } from "@angular/core";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";

@Component({
  selector: "grid-catalog",
  template: `
    <div class="row mb-4 container container-title">
      <h3 class="title col-sm-12 col-md-10">Últimos catalogos creados</h3>
      <span class="container-title-btn col-sm-12 col-md-2">
        <a routerLink="/profile/mis-catalogos" class="btn btn-outline-warning"
          >Explorar</a
        >
      </span>
    </div>

    <div class="card-deck mb-4">
      <ng-container *ngFor="let item of list">
        <card-catalog
          [id]="item.id"
          name="{{ item.name }}"
          [description]="item.description"
          [avatar]="item.avatar"
          [created_at]="item.created_at"
          (details) ="getDetails($event)"
        ></card-catalog>
      </ng-container>
    </div>
    
  `,
  styleUrls: ["./grid-catalog.component.css"],
})
export class GridCatalogComponent implements OnInit {
  @Input() list: Array<ListDetail>;
  constructor() {}

  ngOnInit(): void {}

  getDetails(e){
    //mandar a detalles
    console.log(e)
  }
}
