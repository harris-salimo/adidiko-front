import { Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { GuestLayout } from './layouts/guest/guest.layout';
import { AuthLayout } from './layouts/auth/auth.layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: GuestLayout,
    children: [
      {
        path: 'logout',
        loadComponent: () =>
          import('./pages/auth/logout/logout.component').then(
            (c) => c.LogoutComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
    ],
  },
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/components').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'mpampiasa',
        loadComponent: () =>
          import('./pages/mpampiasa/components').then(
            (c) => c.MpampiasaComponent
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'mpandray',
        loadComponent: () =>
          import('./pages/mpandray/components').then(
            (c) => c.MpandrayComponent
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'adidy',
        loadComponent: () =>
          import('./pages/adidy/components').then((c) => c.AdidyComponent),
        canActivate: [AuthGuard],
      },
      {
        path: 'kartie',
        loadComponent: () =>
          import('./pages/disitirika/components').then(
            (c) => c.DisitirikaComponent
          ),
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  //   { path: '**', component: PageNotFoundComponent },
];
