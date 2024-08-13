import { Injectable } from '@angular/core';
import { Aluno } from '../interfaces/aluno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  listaAlunos: Array<Aluno>;

  constructor() {
    this.listaAlunos = [
      {
        nome: 'aluno1',
        genero: 'agenero',
        dataNascimento: '01/01/2000',
        cpf: '',
        rg: '',
        telefone: '99 9999-9999',
        email: 'aluno1@mail.com',
        senha: 'aluno1senha',
        naturalidade: '',
        endereço: 'rua aluno, bairro aluno',
        turma:'turma1',
      },
      {
        nome: 'aluno2',
        genero: 'agenero',
        dataNascimento: '01/01/2002',
        cpf: '',
        rg: '',
        telefone: '97 9797-9797',
        email: 'aluno2@mail.com',
        senha: 'aluno2senha',
        naturalidade: '',
        endereço: 'rua aluno, bairro aluno',
        turma:'turma2',
      },
      {
        nome: 'aluno3',
        genero: 'agenero',
        dataNascimento: '01/01/2001',
        cpf: '',
        rg: '',
        telefone: '98 9898-9898',
        email: 'aluno3@mail.com',
        senha: 'aluno3senha',
        naturalidade: '',
        endereço: 'rua aluno, bairro aluno',
        turma:'turma2',
      }
    ]
   }

   getAlunos() {
    return this.listaAlunos
   }
}
