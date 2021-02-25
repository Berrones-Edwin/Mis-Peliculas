import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";

import { AuthService } from "src/app/shared/services/auth.service";
import { GlobalService } from "src/app/shared/services/global.service";
import { responseLogin } from "src/app/shared/interfaces/auth/response-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _location: Location
  ) {}

  // https://stackoverflow.com/questions/60169694/java-rest-call-get-url-neterr-failed
  ngOnInit(): void {
    this.createForm();
  }

  login(form: FormGroup) {
    const { email, password } = form.value;

    this._authService
      .login(email, password)
      .subscribe((data: responseLogin) => {

        if (data.exito === 1) {
          this._globalService
            .sweetAlert(
              "Bienvenido",
              "Has iniciado sesión correctamente",
              "success"
            )
            .then(() => this._location.back());
        }
      });
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.form.get("email");
  }
  get emailIsValid() {
    return this.email.valid && this.email.touched;
  }
  get emailIsInvalid() {
    return this.email.invalid && this.email.touched;
  }
  get password() {
    return this.form.get("password");
  }
  get passwordIsValid() {
    return this.password.valid && this.password.touched;
  }
  get passwordIsInvalid() {
    return this.password.invalid && this.password.touched;
  }
}
