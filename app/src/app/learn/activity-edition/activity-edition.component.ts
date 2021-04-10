import { Component, OnInit } from '@angular/core';
import { ActivitySegment } from 'src/app/core/enums/activity-segment.enum';

@Component({
  selector: 'app-activity-edition',
  templateUrl: './activity-edition.component.html',
  styleUrls: ['./activity-edition.component.scss'],
})
export class ActivityEditionComponent implements OnInit {

  public segments = ActivitySegment;
  public selectedSegment: ActivitySegment;

  constructor() { }

  ngOnInit() {
    this.selectedSegment = this.segments.CARD;
  }

  public segmentChanged(segment: Event): void {
    this.selectedSegment = segment['detail'].value;
  }
}
