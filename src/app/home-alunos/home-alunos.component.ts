import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CardComponent } from '../shared/component/card/card.component';
import { Materia } from '../shared/interfaces/materia.interface';
import { UserService } from '../shared/services/user.service';
import { Avaliacao } from '../shared/interfaces/avaliacao.interface';
import { AlunoService } from '../shared/services/aluno.service';
import { AvaliacaoService } from '../shared/services/avaliacao.service';

@Component({
  selector: 'app-home-alunos',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './home-alunos.component.html',
  styleUrl: './home-alunos.component.scss'
})
export class HomeAlunosComponent implements OnInit {
  minhasAvaliacoes: Array<Avaliacao> = [];
  minhasMaterias: Array<Materia> = [];
  cursosExtras: Array<Materia> = [];

  constructor(private router: Router,
    private userService: UserService,
    private alunoService: AlunoService,
    private avaliacaoService: AvaliacaoService
  ) {}

  ngOnInit(): void {
    if (!this.profile('aluno')) {
      window.alert('Perfil atual não é de aluno.');
      this.router.navigate(['/home']);
    }

    let loggedUser = JSON.parse(localStorage.getItem("userData")!);
    let idAluno = this.alunoService.getAlunoIdByUser(loggedUser.login)

    if (idAluno) {
      this.avaliacaoService.getAvaliacoes().subscribe(
        (retorno) => {
          this.minhasAvaliacoes = retorno;
        });
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

  sendToNotas() {
    this.router.navigate(['/notas']);
  }
}
