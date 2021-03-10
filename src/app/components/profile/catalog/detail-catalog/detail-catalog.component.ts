import { Component, Input, OnInit } from '@angular/core';
import { Catalog, ListDetail } from 'src/app/shared/interfaces/profile/List/list-detail.interface';

@Component({
  selector: 'detail-catalog',
  template: `
   <h2>Detalles del catalogo {{ id }}</h2>

<div class="row" >
  <section class="poster-container col-sm-12 col-md-12 mb-3 col-lg-4">
    <img
      class="mb-4 shadow-lg"
      src="{{ details.catalog.avatar | imageApiRest }}"
      alt="{{ details.catalog.avatar }}"
      title="{{ details.catalog.avatar }}"
      width="300"
      height="300"
    />
  </section>

  <section
    class="info-container col-sm-12 col-md-12 col-lg-8"
    *ngIf="details.catalog"
  >
    <div class="row mb-4 container-title">
      <h2 class="title col-sm-12 col-md-10">
        {{ details.catalog.name | uppercase }}
      </h2>
      <p>{{ details.catalog.description }}</p>
      <span class="container-title-btn col-sm-12 col-md-2"> </span>
    </div>
    <div>
      <p>
        {{ details.catalog.description }}
      </p>
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
<!-- Listas-->
  `,
  styles: []
})
export class DetailCatalogComponent implements OnInit {

  @Input() id;
  @Input() details:ListDetail;
  // @Input() items;
  constructor() {
    console.log(this.id)
    console.log(this.details)
   }

  ngOnInit(): void {
    // console.log(this.details)

  }

}
