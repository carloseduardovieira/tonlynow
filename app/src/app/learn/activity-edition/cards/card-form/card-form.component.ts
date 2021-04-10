import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardsFormValidationErrors } from '../cards-form-validation-errors';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  @Output() toCardList$ = new EventEmitter<void>();

  public form: FormGroup;
  public customValidationErrors = CardsFormValidationErrors;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public toCardList(): void {
    this.toCardList$.emit();
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
