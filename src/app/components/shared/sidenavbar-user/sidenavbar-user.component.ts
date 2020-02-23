import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar-user',
  templateUrl: './sidenavbar-user.component.html',
  styleUrls: ['./sidenavbar-user.component.css']
})
export class SidenavbarUserComponent implements OnInit {

  public sidenavbar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
