import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {
  public inEdition: boolean;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    const url = this.getCurrentUrl();
    if (url === 'activity-edition') {
      this.inEdition = true;
    }
  }

  public toActivityEdition(): void {
    const url = this.getCurrentUrl();
    if ( url === 'activity-studying' ) {
      this.router.navigateByUrl('tabs/learn/activity-edition');
    } else {
      this.router.navigateByUrl('tabs/learn/activity-studying');
    }
    this.inEdition = !this.inEdition;
  }

  private getCurrentUrl(): string {
    let url: any = this.router.url.split('/');
    return url[url.length - 1];
  }
}
