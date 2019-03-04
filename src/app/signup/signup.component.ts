import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  myForm: FormGroup;
  private signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.myForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      mobile: this.formBuilder.control('', Validators.required),
      address: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      cPassword: this.formBuilder.control('', Validators.required)
    });
    console.log(this.myForm);

   }

  ngOnInit() {
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!');
      this.router.navigate(['/login']);
      this.myForm.reset();
    }
  }

}
