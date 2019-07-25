import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'carrot', loadChildren: './carrot/carrot.module#CarrotPageModule' },
  { path: 'celery', loadChildren: './celery/celery.module#CeleryPageModule' },
  { path: 'potato', loadChildren: './potato/potato.module#PotatoPageModule' },
  { path: 'tomato', loadChildren: './tomato/tomato.module#TomatoPageModule' },
  { path: 'details', loadChildren: './carrot/details/details.module#DetailsPageModule' },
  { path: 'details2', loadChildren: './celery/details2/details2.module#Details2PageModule' },
  { path: 'tomato-details', loadChildren: './tomato/tomato-details/tomato-details.module#TomatoDetailsPageModule' },
  { path: 'potato-details', loadChildren: './potato/potato-details/potato-details.module#PotatoDetailsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
