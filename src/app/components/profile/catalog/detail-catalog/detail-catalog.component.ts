import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";

@Component({
  selector: "detail-catalog",
  template: `
    <div class="d-flex justify-content-between">
      <h2>Detalles del catalogo {{ details.catalog.name }}</h2>
      <button (click)="editForm()" class="btn btn-outline-warning">
        Editar
      </button>
    </div>

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
          [total_results]="details.catalog.items.length"
          [itemPerPage]="15"
          [page]="pageID"
          (number_page)="nextPage($event)"
        ></grid-favorites>
      </section>
    </div>
  `,
  styles: [],
})
export class DetailCatalogComponent implements OnInit {
  @Input() id;
  @Input() details: ListDetail;
  pageID: number = 1;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      // console.log(data)
      this.pageID = data.id;
    });
  }

  nextPage(page) {
    this.pageID = page;
  }
  editForm() {
    this._router.navigate(["/profile/editar-catalogo/", this.id]);
  }
}
