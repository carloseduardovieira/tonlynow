import { Component, OnInit } from '@angular/core';
import { Segment } from '../core/enums/segment.enum';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {
  public segments = Segment;
  public selectedSegment: Segment;

  constructor() { }

  ngOnInit() {
    this.selectedSegment = this.segments.CARD;
  }

  public segmentChanged(segment: Event): void {
    this.selectedSegment = segment['detail'].value;
  }
}
