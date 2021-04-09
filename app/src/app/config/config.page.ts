import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  constructor(
    private translocoService: TranslocoService
  ) { }

  ngOnInit() {
  }

  public languageChanged(event: Event): void {
    this.translocoService.setActiveLang(event['detail'].value);
  }
}
