import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-section',
  styles: [
    `
      .container-header {
        width: 80vw;
      }
    `,
  ],
  template: `
    <div class="row mb-4 container-header container-title">
      <h3 class="title col-sm-12 col-md-10">{{ title }}</h3>
      <span class="container-title-btn col-sm-12 col-md-2">
        <a *ngIf="showButton" [routerLink]="url" class="btn {{ typeButton }}">{{ nameBTN }}</a>
      </span>
    </div>
  `,
})
export class HeaderSectionComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() nameBTN ='Explorar';
  @Input() typeButton ='btn-outline-warning';
  @Input() showButton=true;
  constructor() {}

  ngOnInit() {}
}
