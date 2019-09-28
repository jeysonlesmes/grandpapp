import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailGrandpaPage } from './detail-grandpa.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGrandpaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailGrandpaPage]
})
export class DetailGrandpaPageModule {}
