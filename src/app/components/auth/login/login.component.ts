import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }

  get email() {
    return this.form.get('email');
  }
  get emailIsValid() {
    return this.email.valid && this.email.touched;
  }
  get emailIsInalid() {
    return this.email.invalid && this.email.touched;
  }
  get password() {
    return this.form.get('password');
  }
  get passwordIsValid() {
    return this.password.valid && this.password.touched;
  }
  get passwordIsInalid() {
    return this.password.invalid && this.password.touched;
  }




}
