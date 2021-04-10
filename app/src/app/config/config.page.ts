import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const LANG_KEY = 'DEFAULT_LANG';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  public defaultLang: string;

  constructor(
    private translocoService: TranslocoService,
  ) { }

  ngOnInit() {
    this.initDefaultLanguage();
  }

  public languageChanged(event: Event): void {
    this.defaultLang = event['detail'].value;
    this.translocoService.setActiveLang(event['detail'].value);
    Storage.set({
      key: LANG_KEY,
      value: event['detail'].value
    });
  }

  private async initDefaultLanguage(): Promise<void> {
    const lang = await Storage.get({key: LANG_KEY});
    if(lang.value) {
      this.defaultLang = lang.value;
    }
  }
}
