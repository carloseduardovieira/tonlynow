import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from './../../../core/models/category.model';
import { Subscription } from 'rxjs';
import { ToastrService } from './../../../shared/toastr-service/toastr.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {

  public categories: Category[] = [];
  public inEdition: boolean;
  public selectedCategoryIndex: number;

  private subscriptions = new Subscription();

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastrService,
    private alert: AlertController,
  ) { }

  ngOnInit() {
    this.selectedCategoryIndex = null;
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public showCategoryForm(): void {
    this.inEdition = !this.inEdition;
    this.selectedCategoryIndex = null;
  }

  public onSaveCategory(category: Category): void {
    if (this.selectedCategoryIndex === null) {
      this.onCreateCategory(category);
      return;
    }

    this.onUpdateCategory(category);
  }

  public onEditCategory(index: number): void {
    this.selectedCategoryIndex = index;
    this.inEdition = true;
  }

  public async showAlertOnRemoveCategory(index: number): Promise<void> {
    const alert = await this.alert.create({
      header: 'Atenção',
      message: `Ao confirmar a categoria ${this.categories[index].title} será removida, essa ação não poderá ser desfeita!`,
      buttons: ['Cancelar',
        {
          text: 'Remover',
          handler: () => {
            this.removeCategory(index);
          }
        }
      ]
    });

    await alert.present();
  }

  private onCreateCategory(category: Category): void {
    this.subscriptions.add(
      this.categoriesService.setCategory(category)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.showCategoryForm();
      }),
    );
  }

  private onUpdateCategory(category: Category): void {
    this.subscriptions.add(
      this.categoriesService.updateCategory(this.selectedCategoryIndex, category)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.showCategoryForm();
        this.selectedCategoryIndex = null;
      }),
    );
  }

  private removeCategory(index: number): void {
    this.subscriptions.add(
      this.categoriesService.removeCategoryByIndex(index)
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.toastr.success('Category has removed with success', 'Success!');
      })
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
