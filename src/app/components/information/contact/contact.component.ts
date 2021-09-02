import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    });
  }

  get name(){
    return this.form.get('name');
  }
  get nameIsValid(){
    return this.name.valid && this.name.touched;
  }
  get nameIsInvalid(){
    return this.name.invalid && this.name.touched;
  }

}
