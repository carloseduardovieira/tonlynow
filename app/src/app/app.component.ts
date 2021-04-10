import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private translocoService: TranslocoService,
  ) {}

  ngOnInit(): void {
    this.setDefaultConfigurations();
  }

  private async setDefaultConfigurations(): Promise<void> {
    const lang = await Storage.get({key:'DEFAULT_LANG'});
    if (lang.value) {
      this.translocoService.setActiveLang(lang.value);
    }
  }
}

