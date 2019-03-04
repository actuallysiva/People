import { Component, OnInit } from '@angular/core';
import { FakerService } from '../faker.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
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
  password: string;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.pattern(this.emailPattern)],
    password: ['', Validators.required, Validators.pattern(this.passwordPattern)]
  });
  user = {
    email: 'admin@admin.com',
    password: 'admin'
  };
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    console.log('crct');
  }
}
