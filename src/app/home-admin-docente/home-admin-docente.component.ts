import { Component } from '@angular/core';
import { CardComponent } from '../shared/component/card/card.component';
import { UserService } from '../shared/services/user.service';
import { AlunoService } from '../shared/services/aluno.service';
import { Aluno } from '../shared/interfaces/aluno.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocenteService } from '../shared/services/docente.service';
import { TurmaService } from '../shared/services/turma.service';
import { Turma } from '../shared/interfaces/turma.interface';
import { Docente } from '../shared/interfaces/docente.interface';

@Component({
  selector: 'app-home-admin-docente',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home-admin-docente.component.html',
  styleUrl: './home-admin-docente.component.scss'
})
export class HomeAdminDocenteComponent {
  
  listaAlunos: Array<Aluno> = [];
  textoPesquisa: string | undefined;
  listaAlunosPesquisa: Array<Aluno> = [];
  listaStatistics: Array<{nome: string, numero: number}> = [];
  listaDocente: Array<Docente> = [];
  listaTurma: Array<Turma> = [];

  constructor(private userService: UserService, 
    private alunoService: AlunoService, 
    private docenteService: DocenteService, 
    private turmaService: TurmaService){
    
    alunoService.getAlunos().subscribe((retorno) => {
      this.listaAlunos = retorno;
      this.listaAlunosPesquisa = this.listaAlunos;
      this.listaStatistics[0].numero = this.listaAlunos.length;
    });
    
    this.listaDocente = docenteService.getDocentes();
    this.listaTurma = turmaService.getTurmas();


    this.listaStatistics.push({
      nome: "Alunos",
      numero: this.listaAlunos.length
    }, 
    {
      nome: 'Docente',
      numero: this.listaDocente.length
    },
    {
      nome: 'Turma',
      numero: this.listaTurma.length
    })
  }

  admin(){
    return this.userService.verifyProfile('admin')
  }

  profile(){
    return this.userService.verifyProfile('admin')
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listaAlunosPesquisa = this.listaAlunos.filter((aluno) =>
        aluno.nome.toUpperCase().includes(this.textoPesquisa!.toUpperCase()) || 
        aluno.telefone.includes(this.textoPesquisa!.toString()) || 
        aluno.email.toUpperCase().includes(this.textoPesquisa!.toUpperCase())
      );
    } else {
      this.listaAlunosPesquisa = this.listaAlunos;
    }
  }


}
