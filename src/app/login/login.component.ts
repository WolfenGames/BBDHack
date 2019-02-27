import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../modals/user.modal';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pattern = /^(?=.*\d)(?=.*[^a-zA-Z\d])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  loginform: FormGroup;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.loginform = new FormGroup({
      'username': new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)] }),
      'password': new FormControl(null, { validators: [Validators.required] })//, Validators.pattern(this.pattern)]})
    });
  }

  onSubmit(): void {
    const user: User = {
      username: this.loginform.get('username').value,
      password: this.loginform.get('password').value
    }
    this.authService.login(user);
  }
}
