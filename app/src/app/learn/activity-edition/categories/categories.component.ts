import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from './../../../core/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public categories: Category[] = [];

  private subscriptions = new Subscription();

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onCreateCategory(): void {
    const category = this.form.controls['name'].value;

    this.subscriptions.add(
      this.categoriesService.setCategory(category)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }),
    );

    this.form.reset();
  }

  private getCategories(): void {
    this.subscriptions.add(
      this.categoriesService.fetchAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }),
    );
  }

  private initForm(): void {
    const name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);

    this.form = new FormGroup({
      name
    });
  }

}
