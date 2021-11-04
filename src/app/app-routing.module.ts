import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./page/qr-scan/qr-scan.module').then( m => m.QrScanPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./page/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./page/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./page/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'carousel',
    loadChildren: () => import('./page/carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./page/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
