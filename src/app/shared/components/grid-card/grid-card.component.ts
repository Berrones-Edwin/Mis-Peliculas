import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css'],
})
export class GridCardComponent implements OnInit {
  @Input()
  title = '';
  @Input()
  url = '';
  @Input()
  showBtnExplore = true;
  @Input()
  itemArray: any[] = [];
  @Input()
  total_results = 0;
  @Input()
  page = 1;
  @Input()
  showPagination = true;

  @Output()
  number_page = new EventEmitter<any>();
  @Output()
  item = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  details(item) {
    this.item.emit(item);
  }

  pageChange(event) {
    this.page = event;
    this.number_page.emit(event);
  }
}
