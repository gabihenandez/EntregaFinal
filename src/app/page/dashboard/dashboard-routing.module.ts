import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'carousel',
        loadChildren: () => import('../carousel/carousel.module').then(m => m.CarouselPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'user-edit',
        loadChildren: () => import('../user-edit/user-edit-routing.module').then(m => m.UserEditPageRoutingModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications-routing.module').then(m => m.NotificationsPageRoutingModule)
      }
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
