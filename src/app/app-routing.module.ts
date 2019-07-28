import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'carrot', loadChildren: './carrot/carrot.module#CarrotPageModule' },
  { path: 'celery', loadChildren: './celery/celery.module#CeleryPageModule' },
  { path: 'potato', loadChildren: './potato/potato.module#PotatoPageModule' },
  { path: 'tomato', loadChildren: './tomato/tomato.module#TomatoPageModule' },
  { path: 'carrot-forecast', loadChildren: './pages/carrot-forecast/carrot-forecast.module#CarrotForecastPageModule' },
  { path: 'celery-forecast', loadChildren: './pages/celery-forecast/celery-forecast.module#CeleryForecastPageModule' },
  { path: 'tomato-forecast', loadChildren: './pages/tomato-forecast/tomato-forecast.module#TomatoForecastPageModule' },
  { path: 'potato-forecast', loadChildren: './pages/potato-forecast/potato-forecast.module#PotatoForecastPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
