import { CardsFormValidationErrors } from './cards-form-validation-errors';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  public form: FormGroup;
  public customValidationErrors = CardsFormValidationErrors;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }


  private initForm(): void {
    const name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);

    const content = new FormControl('', [
      Validators.required,
      Validators.maxLength(5)
    ]);

    this.form = new FormGroup({
      name,
      content
    });

  }

}
