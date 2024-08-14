import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './shared/component/menu-lateral/menu-lateral.component';
import { ToolBarComponent } from './shared/component/tool-bar/tool-bar.component';
import { HomeAdminDocenteComponent } from './home-admin-docente/home-admin-docente.component';
import { HomeAlunosComponent } from './home-alunos/home-alunos.component';
import { CardComponent } from './shared/component/card/card.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { CadastroDocenteComponent } from './cadastro-docente/cadastro-docente.component';

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
        path: 'home-alunos',
        component: HomeAlunosComponent
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
        path:'docentes',
        component: ListaDocentesComponent
    },
    {
        path:'docente',
        component: CadastroDocenteComponent
    },
    {
        path:'docente/:id',
        component: CadastroDocenteComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
