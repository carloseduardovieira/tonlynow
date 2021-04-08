import { Component, OnInit } from '@angular/core';
import { Segment } from '../core/enums/segment.enum';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  public segments = Segment;
  public selectedSegment: Segment;

  constructor() { }

  ngOnInit() {
    this.selectedSegment = this.segments.CARD;
  }

  public segmentChanged(segment: CustomEvent): void {
    this.selectedSegment = segment.detail.value;
  }

}
