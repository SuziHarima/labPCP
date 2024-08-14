import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { HomeAdminDocenteComponent } from '../home-admin-docente/home-admin-docente.component';
import { HomeAlunosComponent } from '../home-alunos/home-alunos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeAdminDocenteComponent, HomeAlunosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private userService: UserService){}
  
  adminDocente(){
    return this.userService.verifyProfile('admin')
  }

  aluno(){
    return this.userService.verifyProfile('aluno')
  }


}
