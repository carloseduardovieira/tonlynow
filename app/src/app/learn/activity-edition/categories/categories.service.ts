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
}
