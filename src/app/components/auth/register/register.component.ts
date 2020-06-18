import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { responseLogin } from 'src/app/interfaces/ResponseLogin.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  login(form: FormGroup) {

    const { email, password } = form.value;

    this._authService.login(email, password).subscribe(console.log);
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeat_password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }

  get name() {
    return this.form.get('name');
  }
  get nameIsValid() {
    return this.name.valid && this.name.touched;
  }
  get nameIsInvalid() {
    return this.name.invalid && this.name.touched;
  }
  get email() {
    return this.form.get('email');
  }
  get emailIsValid() {
    return this.email.valid && this.email.touched;
  }
  get emailIsInvalid() {
    return this.email.invalid && this.email.touched;
  }
  get password() {
    return this.form.get('password');
  }
  get passwordIsValid() {
    return this.password.valid && this.password.touched;
  }
  get passwordIsInvalid() {
    return this.password.invalid && this.password.touched;
  }
  get repeat_password() {
    return this.form.get('repeat_password');
  }
  get repeat_passwordIsValid() {
    return this.repeat_password.valid && this.repeat_password.touched;
  }
  get repeat_passwordIsInvalid() {
    return this.repeat_password.invalid && this.repeat_password.touched;
  }



}
