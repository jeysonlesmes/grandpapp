import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivityInscribePage } from './activity-inscribe.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityInscribePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityInscribePage]
})
export class ActivityInscribePageModule {}
