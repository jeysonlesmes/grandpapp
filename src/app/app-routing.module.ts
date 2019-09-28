import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'detail-activity/:id', loadChildren: './detail-activity/detail-activity.module#DetailActivityPageModule' },
  { path: 'detail-grandpa/:id', loadChildren: './detail-grandpa/detail-grandpa.module#DetailGrandpaPageModule' },
  { path: 'activities-search/:activity', loadChildren: './activities-search/activities-search.module#ActivitiesSearchPageModule' },
  { path: 'activity-inscribe', loadChildren: './activity-inscribe/activity-inscribe.module#ActivityInscribePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
