import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInState: boolean = false;

  constructor() { }

  ngOnInit() {
    // this.jsLoader.setField('header');
    // this.jsLoader.load('jQuery');
  }


}
