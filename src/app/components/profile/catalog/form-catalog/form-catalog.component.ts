import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { ListDetail } from 'src/app/shared/interfaces/profile/List/list-detail.interface';
import { ResponseSaveCatalog } from 'src/app/shared/interfaces/profile/List/response-save-catalog.interface';
import {
  GlobalService,
  SweetAlertType,
} from 'src/app/shared/services/global.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-form-catalog',
  templateUrl: './form-catalog.component.html',
  styleUrls: ['./form-catalog.component.css'],
})
export class FormCatalogComponent implements OnInit {
  public form: FormGroup;
  public loading = true;
  public image: File;
  id: string;
  catalogEdit: any = {};
  typeCatalogs = [
    {
      id: 1,
      name: 'Películas',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _profileService: ProfileService,
    private _globalService: GlobalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.pipe(take(1)).subscribe((data) => {
      this.id = data.id;
    });
    if (this.id) {this.getDetailsCatalog();}
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      type_id: ['', Validators.required],
    });
  }

  changeType(event) {
    this.typeID.setValue(event.target.value);
  }

  getDetailsCatalog() {
    this._profileService
      .getDetailsList(Number(this.id))
      .pipe(
        map(({ catalog }: ListDetail) => ({
          name: catalog.name,
          id: catalog.id,
          type_id: catalog.type_id,
          description: catalog.description,
          user_id: catalog.user_id,
        }))
      )
      .subscribe((data) => {
        if (data) {
          this.catalogEdit = { ...data };
          this.form.setValue({
            name: data.name,
            description: data.description,
            type_id: data.type_id,
          });
        }
      });
  }
  submitForm(form: FormGroup) {
    if (!this.id) {this.saveCatalog(form);}
    else {this.editCatalog(form);}
  }
  saveCatalog(form: FormGroup) {
    const { name, description, type_id } = form.value;

    this.loading = false;
    this._profileService.saveCatalogs(name, description, type_id).subscribe(
      (data: ResponseSaveCatalog) => {
        this.showAlertAndNavigation('Correcto', data.message, 'success');
      },
      (error) => {
        this._globalService.sweetAlert('Error', `${error.error}`, 'error');
        this.loading = true;
      }
    );
  }
  editCatalog(form: FormGroup) {
    const { name, description, type_id } = form.value;
    this.catalogEdit = { ...this.catalogEdit, name, description, type_id };
    this.loading = false;

    this._profileService
      .putCatalogs(this.catalogEdit, Number(this.id))
      .subscribe(
        (data: ResponseSaveCatalog) => {
          if (data.message)
            {this.showAlertAndNavigation(
              'Correcto',
              'Tú catálogo se ha editado correctamente',
              'success'
            );}
        },
        (error) => {
          this._globalService.sweetAlert('Error', `${error.error}`, 'error');
          this.loading = true;
        }
      );
  }
  showAlertAndNavigation(
    title: string,
    description: string,
    type: SweetAlertType
  ) {
    this._globalService.sweetAlert(title, description, type).then(() => {
      this.loading = true;
      this._router.navigate(['/profile/mis-catalogos']);
    });
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
  get description() {
    return this.form.get('description');
  }
  get descriptionIsValid() {
    return this.description.valid && this.description.touched;
  }
  get descriptionIsInvalid() {
    return this.description.invalid && this.description.touched;
  }

  get typeID() {
    return this.form.get('type_id');
  }
  get typeIDIsValid() {
    return this.typeID.valid && this.typeID.touched;
  }
  get typeIDIsInvalid() {
    return this.typeID.invalid && this.typeID.touched;
  }
}
