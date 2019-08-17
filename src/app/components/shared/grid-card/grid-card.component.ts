import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {

  @Input() title = '';
  @Input() url = '';
  @Input() showBtnExplore:boolean = true;
  @Input() itemArray: any[] = [];
  @Output() item = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  details(item){
    this.item.emit(item);
  }

}
