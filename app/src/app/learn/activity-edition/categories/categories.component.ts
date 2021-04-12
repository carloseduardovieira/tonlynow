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

  public categories: Category[] = [];
  public inEdition: boolean;

  private subscriptions = new Subscription();

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onCreateCategory(): void {
    this.inEdition = true;
  }

  public onSaveCategory(category: Category): void {
    this.subscriptions.add(
      this.categoriesService.setCategory(category)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }),
    );
  }

  private getCategories(): void {
    this.subscriptions.add(
      this.categoriesService.fetchAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      }),
    );
  }
}
