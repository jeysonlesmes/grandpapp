import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivitiesSearchPage } from './activities-search.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivitiesSearchPage]
})
export class ActivitiesSearchPageModule {}
