import { Routes } from '@angular/router';
import { SupportPage } from './support.page';
import { ZoneSupportPage } from './zone-support/zone-support.page';
import { ZoneDetailPage } from './zone-detail/zone-detail.page';
// import { zoneByIdResolver } from '@wow/core/resolvers';

export const routes: Routes = [
  {
    path: '',
    component: SupportPage,
    children: [
      {
        path: 'login',
        component: ZoneSupportPage,
      },
      // {
      //   path: ':zoneId/detalles',
      //   resolve: { zone: zoneByIdResolver },
      //   component: ZoneDetailPage
      // },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  }
];
