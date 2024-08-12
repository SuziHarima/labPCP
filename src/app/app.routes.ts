import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './shared/component/menu-lateral/menu-lateral.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'menu',
        component: MenuLateralComponent
    },
    {
        path: 'home',
        component: LoginComponent
    }
];
