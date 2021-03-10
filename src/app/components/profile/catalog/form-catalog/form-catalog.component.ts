import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TrackHttpError } from "src/app/shared/interfaces/error/track-http-error";
import { ResponseSaveCatalog } from "src/app/shared/interfaces/profile/List/response-save-catalog.interface";
import { SaveCatalog } from "src/app/shared/interfaces/profile/List/save-catalog.interface";
import { GlobalService } from "src/app/shared/services/global.service";
import { ProfileService } from "src/app/shared/services/profile.service";

@Component({
  selector: "app-form-catalog",
  templateUrl: "./form-catalog.component.html",
  styleUrls: ["./form-catalog.component.css"],
})
export class FormCatalogComponent implements OnInit {
  public form: FormGroup;
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
    private _router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      description: [""],
      avatar: [null, Validators.required],
      type_id: ["", Validators.required],
    });
  }

  handleImage(event): void {
    // const reader = new FileReader();

    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
      this.handleFileSelect(event)
    }
  }
  changeType(event) {
    this.typeID.setValue(event.target.value);
  }
  saveCatalog(form: FormGroup) {
    const { name, description, type_id } = form.value;

    const img = localStorage.getItem('img');

    this.loading = false;
    this._profileService
      .saveCatalogs(name, description, this.image, type_id)
      .subscribe(
        (data: ResponseSaveCatalog) => {
          if (data.data) {
            this._globalService
              .sweetAlert(
                "Correcto",
                "Tu catalogo se ha creado correctamente",
                "success"
              )
              .then(() => {
                this.loading = true;
              
              });
          } else {
            this._globalService
              .sweetAlert("Error", `${data.message}`, "error")
              .then(() => {
                this.loading = true;
                this._router.navigate(["/profile/mis-catalogos"]);
              });
          }
        },
        (error) => {
          console.log(error);
          this._globalService.sweetAlert("Error", `${error.error}`, "error");
          this.loading = true;
        }
      );
  }

  handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        localStorage.setItem('img',base64String)
       
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
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
