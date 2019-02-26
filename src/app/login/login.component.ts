import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pattern = /^(?=.*\d)(?=.*[^a-zA-Z\d])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  loginform: FormGroup;

  constructor() {

  }

  ngOnInit() {
    // this.loginform = new FormGroup({
    //   'username': new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] } ),
    //   'password': new FormControl(null, { validators: [Validators.required, Validators.pattern(this.pattern)]})
    // });

    
  }
}
