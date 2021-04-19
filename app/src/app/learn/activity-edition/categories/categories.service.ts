import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _categories: Category[] = [
    new Category({title: 'Verbs'}),
    new Category({title: 'Sentences'}),
  ];

  constructor() { }

  public fetchAllCategories(): Observable<Category[]> {
    return of(this._categories);
  }

  public setCategory(category: Category): Observable<Category[]> {
    this._categories.push(category);
    return of(this._categories);
  }

  public getCategoryByIndex(index: number): Observable<Category> {
    return of(this._categories[index]);
  }

  public updateCategory(index: number, category: Category): Observable<Category[]> {
    return of(this._categories.map((c: Category, cIndex: number) => {
      if (cIndex === index) {
        c.title = category.title;
      }
      return c;
    }));
  }

  public removeCategoryByIndex(index: number): Observable<Category[]> {
    return of(this._categories.filter((c: Category, cIndex: number) => cIndex !== index));
  }
}
