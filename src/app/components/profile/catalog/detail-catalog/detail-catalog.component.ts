import { Component, Input, OnInit } from "@angular/core";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";

@Component({
  selector: "detail-catalog",
  template: `
    <h2>Detalles del catalogo  {{ details.catalog.name }}</h2>

    <div class="row">
      <section
        class="info-container col-sm-12 col-md-12 col-lg-12"
        *ngIf="details.catalog"
      >
        <div class="row mb-4 container-title">
          <h3 class="title col-sm-12 col-md-10">
          {{ details.catalog.description }}
          </h3>
          <hr />
        </div>
      </section>
      <section>
        <h3>Películas agregadas</h3>
        <grid-favorites
          [showHeaderAndButton]="false"
          [favorites]="details.catalog.items"
        ></grid-favorites>
      </section>
    </div>
  `,
  styles: [],
})
export class DetailCatalogComponent implements OnInit {
  @Input() id;
  @Input() details: ListDetail;
  constructor() {}

  ngOnInit(): void {}
}
