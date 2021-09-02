import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ListDetail } from "src/app/shared/interfaces/profile/List/list-detail.interface";
import { ResponseSaveCatalog } from "src/app/shared/interfaces/profile/List/response-save-catalog.interface";
import { GlobalService } from "src/app/shared/services/global.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import Swal from "sweetalert2";

@Component({
  selector: "grid-catalog",
  template: `
    <ng-container *ngIf="list.length > 0; else emptyListCatalogs">
      <header-section
        title="Últimos catalogos creados"
        url="/profile/mis-catalogos"
        [showButton]="showButton"
      ></header-section>

      <div class="card-deck mb-4">
        <ng-container
          *ngFor="
            let item of list
              | paginate
                : {
                    itemsPerPage: itemPerPage,
                    currentPage: page,
                    totalItems: total_results
                  }
          "
        >
          <card-catalog
            [id]="item.id"
            name="{{ item.name }}"
            [description]="item.description"
            [avatar]="item.avatar"
            [created_at]="item.created_at"
            (details)="getDetails($event)"
            (delete)="deleteItem($event)"
          ></card-catalog>
        </ng-container>
      </div>
      <pagination-controls
        class="my-pagination"
        (pageChange)="pageChange($event)"
        previousLabel="Anterior"
        nextLabel="Siguiente"
        *ngIf="showPagination"
        [responsive]="true"
        maxSize="10"
      >
      </pagination-controls>
    </ng-container>
    <ng-template #emptyListCatalogs>
      <div class="alert alert-warning container-full mr-4" role="alert">
        Aún no cuentas con catalogos.
        <a routerLink="/profile/nuevo-catalogo" class="alert-link"
          >Crea mi primer catalogo</a
        >
      </div>
    </ng-template>
  `,
  styleUrls: ["./grid-catalog.component.css"],
})
export class GridCatalogComponent implements OnInit {
  @Input() list: Array<ListDetail>;
  @Input() showButton = true;
  @Input() showPagination = true;

  @Input() page = 1;
  @Input() total_results: number;
  @Input() itemPerPage: number;

  @Output() number_page = new EventEmitter<any>();

  constructor(
    private _router: Router,
    private _profileService: ProfileService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {}

  getDetails(e) {
    this._router.navigate(["/profile/catalogo/detalles/", e]);
  }
  deleteItem(id) {
    Swal.fire({
      text: "¿Estas seguro que deseas eliminar este catalogo?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      type: "question",
    }).then((result) => {
      if (result.value) {
        this.deleteCatalog(id);
      }
    });
  }

  deleteCatalog(id) {
    this._profileService.deleteCatalog(id).subscribe(
      (data: ResponseSaveCatalog) => {
        if (data.message) {
          this._globalService
            .sweetAlert("Correcto", data.message, "success")
            .then(() => (this.list = this.deleteItemToArray(id)));
        }
      },
      (error) => {
        this._globalService.sweetAlert("Correcto", error, "error");
      }
    );
  }

  pageChange(event) {
    this.page = event;
    this.number_page.emit(event);
  }

  deleteItemToArray(id): Array<ListDetail> {
    return this.list.filter((data) => data["id"] !== id);
  }
}
