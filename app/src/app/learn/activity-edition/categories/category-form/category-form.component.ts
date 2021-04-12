import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { ToastrService } from 'src/app/shared/toastr-service/toastr.service';
import { CategoryFormValidationErrors } from './category-form-validation-errors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  @Output() sendNewCategory$ = new EventEmitter<Category>();

  public form: FormGroup;
  public customValidationErrors = CategoryFormValidationErrors;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public onSubmit(): void {
    const title = this.form.controls['title'].value;
    if ( title ) {
      this.sendNewCategory$.emit(new Category({title}));
      return;
    }

    this.toastr.warning('É necessário informar um título para salvar', 'Atenção');
  }


  private initForm(): void {
    const title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]);

    this.form = new FormGroup({
      title
    });
  }

}
