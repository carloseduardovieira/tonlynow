import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CardsFormValidationErrors } from './cards-form-validation-errors';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  public form: FormGroup;
  public customValidationErrors = CardsFormValidationErrors;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public toStudying(): void {
    this.router.navigate(['..','activity-studying'], {relativeTo: this.route});
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
