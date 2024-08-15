import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './shared/component/menu-lateral/menu-lateral.component';
import { ToolBarComponent } from './shared/component/tool-bar/tool-bar.component';
import { HomeAdminDocenteComponent } from './home-admin-docente/home-admin-docente.component';
import { HomeAlunosComponent } from './home-alunos/home-alunos.component';
import { CardComponent } from './shared/component/card/card.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { HomeComponent } from './home/home.component';
import { NotasComponent } from './notas/notas.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aluno',
        component: CadastroAlunoComponent
    },
    {
        path:'aluno/:id',
        component: CadastroAlunoComponent
    },
    {
        path:'notas',
        component: NotasComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
