import { MainLayoutComponentComponent } from './core/base-component/main-layout-component/main-layout-component.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      {
        path: 'consumer',
        loadChildren: () =>
          import('./page/consumer/consumer.module').then(m => m.ConsumerModule),
      },
      {
        path: 'monitor',
        loadChildren: () =>
          import('./page/monitor/monitor.module').then(m => m.MonitorModule),
      },
      {
        path: 'servers',
        loadChildren: () =>
          import('./page/servers/servers.module').then(m => m.ServersModule),
      },
      {
        path: 'providers',
        loadChildren: () =>
          import('./page/providers/providers.module').then(m => m.ProvidersModule),
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./page/packages/packages.module').then(m => m.PackagesModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: '**',
        redirectTo: 'monitor',
        pathMatch: 'full',
      },
    ],
  },
];

export const AppRoutingModule = RouterModule.forRoot(
  appRoutes,
  {
    enableTracing: false,
    useHash: true,
  }
);
