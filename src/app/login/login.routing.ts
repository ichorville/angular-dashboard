import { ModuleWithProviders } 	from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }    from './login.component';

const loginRoutes: Routes = [
    {
        path: '',
		redirectTo: '/login',
		pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(loginRoutes);