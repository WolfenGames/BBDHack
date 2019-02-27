import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user.modal';
import { Router, NavigationExtras } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private router: Router) { }

  login(user: User): void {
    // HERE IS THE IP AND STUFF
    const url = 'http://localhost:3000/user/login?username=' + user.username + '&password=' + user.password;

    // OtherStuff
    this.httpclient.get<{ message: any }>(url, { withCredentials: true }).subscribe(responsedata => {
      // const extras: NavigationExtras = {
      //   queryParams: {
      //     'msg': 'WHERE IS THE LAMB SAUCE - Gordam Ransay'
      //   }
      // };

      // responsedata['msg'] === 'OK' ? this.router.navigate(['/profile']) : this.router.navigate(['/login'], extras);

      if (responsedata['msg'] === 'OK') {
        // Save to localStorage here.
        localStorage.setItem('username', user.username);
        localStorage.setItem('id', responsedata['id']); // Check this.
        this.router.navigate(['/profile']);
      }
      else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.httpclient.post<{}>('logout', { withCredentials: true} );
    this.router.navigate(['/']);
  }

  checkLoggedIn(): any {
    const url = 'whatever/user/amiloggedin';

    this.httpclient.get<{ message: any }>(url, { withCredentials: true }).subscribe(responsedata => {
      return responsedata['msg'] === 'OK';
    });
  }
}
