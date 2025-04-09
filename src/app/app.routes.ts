import { Routes } from '@angular/router';
import { AuthLayout } from '@wow/layout/auth';
import { ShellLayout } from '@wow/layout/shell';
import { authGuard } from '@wow/core/guards';

export const routes: Routes = [
    {
      path: 'auth',
      component: AuthLayout,
      loadChildren: () => import('./pages/auth/auth.routes').then(m => m.routes)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth'
    }
    // {
    //   path: '',
    //   component: ShellLayout,
    //   canActivate: [authGuard],
    //   children: [
    //     {
    //       path: 'auth',
    //       loadChildren: () => import('./pages/support/support.routes').then(m => m.routes)
    //     },
    //     {
    //       path: '',
    //       pathMatch: 'full',
    //       redirectTo: 'auth'
    //     }
    //   ]
    // }

  ];
