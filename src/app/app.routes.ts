import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './shared/component/menu-lateral/menu-lateral.component';
import { ToolBarComponent } from './shared/component/tool-bar/tool-bar.component';
import { HomeAdminDocenteComponent } from './home-admin-docente/home-admin-docente.component';
import { CardComponent } from './shared/component/card/card.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeAdminDocenteComponent
    },
    {
        path: 'card',
        component: CardComponent
    }
];
