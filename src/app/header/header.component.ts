import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInState: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.jsLoader.setField('header');
    // this.jsLoader.load('jQuery');

    if (this.authService.checkLoggedIn()) {
      this.loggedInState = true;
    }
  }

  logout() {
    this.authService.logout();
    this.loggedInState = false;
  }

}
