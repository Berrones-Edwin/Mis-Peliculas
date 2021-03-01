import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "card-favorites",
  template: ` <div class="card bg-dark" style="width: 18rem">
    <img
      src="{{ avatar | image }}"
      class="card-img-top"
      alt="{{ avatar | image }}"
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
    <div class="card-footer">
      <a (click)="seeDetailsMovie()" class="btn btn-outline-primary">Ver más</a>
    </div>
  </div>`,
  styles: [],
})
export class CardFavoritesComponent implements OnInit {
  @Input() avatar: string;
  @Input() name: string;
  @Input() description: string;
  @Input() created_at: string;
  @Input() id: string;

  @Output() details = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  seeDetailsMovie() {
    this.details.emit(this.id);
  }
}
