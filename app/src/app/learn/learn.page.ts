import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit, OnDestroy {
  public inEdition: boolean;

  private subscriptions = new Subscription();

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.watchRouterChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public toActivityEdition(): void {
    const url = this.getCurrentUrl();
    if ( url === 'activity-studying' ) {
      this.router.navigateByUrl('tabs/learn/activity-edition');
    } else {
      this.router.navigateByUrl('tabs/learn/activity-studying');
    }
  }

  private getCurrentUrl(): string {
    let url: any = this.router.url.split('/');
    return url[url.length - 1];
  }

  private watchRouterChanges(): void {
    this.subscriptions.add(
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          const url = this.getCurrentUrl();
          if (url === 'activity-edition') {
            this.inEdition = true;
          } else {
            this.inEdition = false;
          }
        }
      }),
    );
  }
}
