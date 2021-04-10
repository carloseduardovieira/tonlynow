import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityEditionComponent } from './activity-edition/activity-edition.component';
import { ActivityStudyingComponent } from './activity-studying/activity-studying.component';

import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage,
    children: [
      {
        path: 'activity-studying',
        component: ActivityStudyingComponent
      },
      {
        path:'activity-edition',
        component: ActivityEditionComponent
      },
      {
        path: '',
        redirectTo: '/tabs/learn/activity-studying',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/learn/activity-studying',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPageRoutingModule {}
