import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private duration = 3000;

  constructor(
    private toastr: ToastController
  ) { }

  public async success(message: string, header: string): Promise<void> {
    const toastr = await this.toastr.create({
      message,
      header,
      position: 'top',
      duration: this.duration,
      color: 'success',
    });

    toastr.present();
  }

  public async warning(message: string, header: string): Promise<void> {
    const toastr = await this.toastr.create({
      message,
      header,
      position: 'top',
      duration: this.duration,
      color: 'warning',
    });

    toastr.present();
  }

  public async danger(message: string, header: string): Promise<void> {
    const toastr = await this.toastr.create({
      message,
      header,
      position: 'top',
      duration: this.duration,
      color: 'danger',
    });

    toastr.present();
  }

  public async info(message: string, header: string): Promise<void> {
    const toastr = await this.toastr.create({
      message,
      header,
      position: 'top',
      duration: this.duration,
      color: 'primary',
    });

    toastr.present();
  }
}
