import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  @Input() total_pages: any[];
  @Output() page = new EventEmitter();
  @Input() id: any;

  constructor() {}

  ngOnInit() {}

  nextPage(page) {
    this.page.emit(page);
  }
}
