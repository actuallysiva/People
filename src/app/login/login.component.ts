import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValidFormSubmitted = null;
  validateEmail = true;
  emailPattern = 'admin@admin.com';
  passwordPattern = 'admin';
  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.pattern(this.emailPattern)],
    password: ['', Validators.required, Validators.pattern(this.passwordPattern)]
  });
  user = {
    email: 'admin@admin.com',
    password: 'admin'
  };
  constructor(private formBuilder: FormBuilder, public router: Router) {
  }
  ngOnInit() {
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    console.log('crct');
    this.router.navigate(['/profile']);
  }
}

