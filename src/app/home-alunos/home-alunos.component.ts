import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CardComponent } from '../shared/component/card/card.component';
import { Materia } from '../shared/interfaces/materia.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home-alunos',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './home-alunos.component.html',
  styleUrl: './home-alunos.component.scss'
})
export class HomeAlunosComponent {
  // minhasAvaliacoes: Array<Avaliacao>;
  minhasMaterias: Array<Materia>;
  cursosExtras: Array<Materia>;

  constructor(private router: Router, private userService: UserService) {
    if (!this.profile('aluno')) {
      window.alert('Perfil atual não é de aluno.');
      this.router.navigate(['/home']);
    }

    this.minhasMaterias = [
      {
        id: 1,
        nome: 'Biologia',
      },
      {
        id: 2,
        nome: 'História',
      },
      {
        id: 3,
        nome: 'Matemática',
      }
    ];
    this.cursosExtras = [
      {
        id: 4,
        nome: 'Finanças Pessoais',
      },
      {
        id: 5,
        nome: 'Eletrônica',
      }
    ];

  }

  profile(perfil: string){
    return this.userService.verifyProfile(perfil)
  }
}
