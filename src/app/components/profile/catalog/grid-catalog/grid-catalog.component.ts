import { Component, Input, OnInit } from "@angular/core";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";

@Component({
  selector: "grid-catalog",
  template: `
    <header-section
      title="Últimos catalogos creados"
      url="/profile/mis-catalogos"
      [showButton]=showButton
    ></header-section>

    <div class="card-deck mb-4">
      <ng-container *ngFor="let item of list">
        <card-catalog
          [id]="item.id"
          name="{{ item.name }}"
          [description]="item.description"
          [avatar]="item.avatar"
          [created_at]="item.created_at"
          (details)="getDetails($event)"
        ></card-catalog>
      </ng-container>
    </div>
  `,
  styleUrls: ["./grid-catalog.component.css"],
})
export class GridCatalogComponent implements OnInit {
  @Input() list: Array<ListDetail>;
  @Input() showButton: boolean=true;
  constructor() {}

  ngOnInit(): void {}

  getDetails(e) {
    //  Mandar a details catalog
    // console.log(e);
  }
}
