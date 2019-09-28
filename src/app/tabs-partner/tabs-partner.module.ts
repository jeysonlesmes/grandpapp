import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPartnerPageRoutingModule } from './tabs-partner.router.module';

import { IonicModule } from '@ionic/angular';

import { TabsPartnerPage } from './tabs-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPartnerPageRoutingModule
  ],
  declarations: [TabsPartnerPage]
})
export class TabsPartnerPageModule {}
