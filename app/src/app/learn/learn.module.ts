import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPageRoutingModule } from './learn-routing.module';

import { LearnPage } from './learn.page';
import { CardsComponent } from './activity-edition/cards/cards.component';
import { SharedModule } from '../shared/shared.module';
import { TranslocoModule } from '@ngneat/transloco';
import { ActivityStudyingComponent } from './activity-studying/activity-studying.component';
import { ActivityEditionComponent } from './activity-edition/activity-edition.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslocoModule
  ],
  declarations: [
    LearnPage,
    CardsComponent,
    ActivityEditionComponent,
    ActivityStudyingComponent
  ]
})
export class LearnPageModule {}
