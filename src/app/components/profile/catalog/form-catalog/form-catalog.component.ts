import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { ResponseSaveCatalog } from "src/app/shared/interfaces/profile/List/response-save-catalog.interface";
import { GlobalService } from "src/app/shared/services/global.service";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-form-catalog",
  templateUrl: "./form-catalog.component.html",
  styleUrls: ["./form-catalog.component.css"],
})
export class FormCatalogComponent implements OnInit {
  form: FormGroup;
  public loading: boolean = true;
  public image: File;
  typeCatalogs = [
    {
      id: 1,
      name: "Películas",
    },
    {
      id: 2,
      name: "Series",
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _profileService: ProfileService,
    private _globalService: GlobalService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      avatar: ["", Validators.required],
      type_id: ["", Validators.required],
    });
  }

  handleImage(event): void {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }
  changeType(event) {
    this.typeID.setValue(event.target.value);
  }
  saveCatalog(form: FormGroup) {
    this.loading = false;
    this._profileService
      .saveCatalogs(form.value)
      .subscribe((data: ResponseSaveCatalog) => {
        if (data.data) {
          this._globalService
            .sweetAlert(
              "Correcto",
              "Tu catalogo se ha creado correctamente",
              "success"
            )
            .then(() => {
              this.loading = true;
              this._router.navigate(["/profile/mis-catalogos"]);
            });
        } else {
          this._globalService
            .sweetAlert("Error", `${data.message}`, "error")
            .then(() => {
              this.loading = true;
              this._router.navigate(["/profile/mis-catalogos"]);
            });
        }
      });
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
  get description() {
    return this.form.get("description");
  }
  get descriptionIsValid() {
    return this.description.valid && this.description.touched;
  }
  get descriptionIsInvalid() {
    return this.description.invalid && this.description.touched;
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
  get typeID() {
    return this.form.get("type_id");
  }
  get typeIDIsValid() {
    return this.typeID.valid && this.typeID.touched;
  }
  get typeIDIsInvalid() {
    return this.avatar.invalid && this.avatar.touched;
  }
}
