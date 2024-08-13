import { Component } from '@angular/core';
import { CardComponent } from '../shared/component/card/card.component';
import { UserService } from '../shared/services/user.service';
import { AlunoService } from '../shared/services/aluno.service';
import { Aluno } from '../shared/interfaces/aluno.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-admin-docente',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home-admin-docente.component.html',
  styleUrl: './home-admin-docente.component.scss'
})
export class HomeAdminDocenteComponent {
  
  listaAlunos: Array<Aluno> = [];

  constructor(private userService: UserService, private alunoService: AlunoService){
    
    this.listaAlunos = alunoService.getAlunos();
  }

  profile(){
    return this.userService.verifyProfile('admin')
  }


}
