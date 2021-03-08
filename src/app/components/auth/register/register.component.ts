import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";

import { AuthService } from "src/app/shared/services/auth.service";
import { GlobalService } from "src/app/shared/services/global.service";
import { ResponseRegisterUser } from "src/app/shared/interfaces/auth/response-register";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  image: File;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  register(form: FormGroup) {
    const { email, password, name, lastName, avatar } = form.value;

    this.loading = false;
    this._authService
      .register(name, lastName, email, password, this.image)
      .subscribe((data: ResponseRegisterUser) => {
        if (data) {
          this._globalService
            .sweetAlert(
              `Bienvenido ${name} ${lastName}`,
              "Te has registrado correctamente",
              "success"
            )
            .then(() => {
              this._location.back();
              this.loading = true;
            });
        }
      });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      avatar: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      repeat_password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  handleImage(event): void {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

  get name() {
    return this.form.get("name");
  }
  get nameIsValid() {
    return this.name.valid && this.name.touched;
  }
  get nameIsInvalid() {
    return this.name.invalid && this.name.touched;
  }
  get lastName() {
    return this.form.get("lastName");
  }
  get lastNameIsValid() {
    return this.lastName.valid && this.lastName.touched;
  }
  get lastNameIsInvalid() {
    return this.lastName.invalid && this.lastName.touched;
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
  get avatar() {
    return this.form.get("avatar");
  }
  get avatarIsValid() {
    return this.avatar.valid && this.avatar.touched;
  }
  get avatarIsInvalid() {
    return this.avatar.invalid && this.avatar.touched;
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
  get repeat_password() {
    return this.form.get("repeat_password");
  }
  get repeat_passwordIsValid() {
    return this.repeat_password.valid && this.repeat_password.touched;
  }
  get repeat_passwordIsInvalid() {
    return this.repeat_password.invalid && this.repeat_password.touched;
  }
}
