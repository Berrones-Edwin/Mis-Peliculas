import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "card-catalog",
  template: `
    <div class="card bg-dark mb-5" style="width: 18rem;min-width: 18rem">
      <img
        src="{{ avatar | imageApiRest }}"
        class="card-img-top"
        alt="{{ avatar | imageApiRest }}"
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <p class="card-text">
          <small class="text-muted">{{ created_at | date: "shortDate" }}</small>
        </p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <a (click)="detailsCatalogs()" class="btn btn-outline-primary"
          >Ver más</a
        >
        <button (click)="deleteCatalog(id)" class="btn btn-outline-danger">
          Eliminar
        </button>
      </div>
    </div>
  `,
  styleUrls: ["./card-catalog.component.css"],
})
export class CardCatalogComponent implements OnInit {
  @Input() name: string;
  @Input() avatar: string;
  @Input() description: string;
  @Input() id: string;
  @Input() created_at: string;
  @Output() details = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  detailsCatalogs() {
    this.details.emit(this.id);
  }
  deleteCatalog(id) {
    this.delete.emit(id);
  }
}
