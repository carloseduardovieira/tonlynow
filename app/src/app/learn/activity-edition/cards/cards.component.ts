import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public cards: any[] = [];
  public inEdition: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public onEdition(): void {
    this.inEdition = !this.inEdition;
  }

  public toStudying(): void {
    this.router.navigate(['..','activity-studying'], {relativeTo: this.route});
  }



}
