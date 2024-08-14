import { Injectable } from '@angular/core';
import { Aluno } from '../interfaces/aluno.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = 'http://localhost:3000/alunos';

  // listaAlunos: Array<Aluno>;

  constructor(private httpClient: HttpClient) {
    // this.listaAlunos = [
    //   {
    //     id: 1,
    //     nome: 'aluno1',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2000',
    //     cpf: '',
    //     rg: '',
    //     telefone: '99 9999-9999',
    //     email: 'aluno1@mail.com',
    //     senha: 'aluno1senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma1',
    //   },
    //   {
    //     id: 2,
    //     nome: 'aluno2',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2002',
    //     cpf: '',
    //     rg: '',
    //     telefone: '97 9797-9797',
    //     email: 'aluno2@mail.com',
    //     senha: 'aluno2senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    //   {
    //     id: 3,
    //     nome: 'aluno3',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2001',
    //     cpf: '',
    //     rg: '',
    //     telefone: '98 9898-9898',
    //     email: 'aluno3@mail.com',
    //     senha: 'aluno3senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    //   {
    //     id: 4,
    //     nome: 'aluno4',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2001',
    //     cpf: '',
    //     rg: '',
    //     telefone: '95 9898-9898',
    //     email: 'aluno4@mail.com',
    //     senha: 'aluno4senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    //   {
    //     id: 5,
    //     nome: 'aluno5',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2001',
    //     cpf: '',
    //     rg: '',
    //     telefone: '95 9898-9898',
    //     email: 'aluno5@mail.com',
    //     senha: 'aluno5senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    //   {
    //     id: 6,
    //     nome: 'aluno6',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2001',
    //     cpf: '',
    //     rg: '',
    //     telefone: '96 9898-9898',
    //     email: 'aluno6@mail.com',
    //     senha: 'aluno6senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    //   {
    //     id: 7,
    //     nome: 'aluno7',
    //     genero: 'agenero',
    //     dataNascimento: '01/01/2001',
    //     cpf: '',
    //     rg: '',
    //     telefone: '98 9898-9898',
    //     email: 'aluno7@mail.com',
    //     senha: 'aluno7senha',
    //     naturalidade: '',
    //     endereço: 'rua aluno, bairro aluno',
    //     turma:'turma2',
    //   },
    // ]
   }

   getAlunos() {
    return this.httpClient.get<Array<Aluno>>(this.url);
   }

   getAlunoIdByUser(user: string): number | undefined {
    //  for (let aluno of this.listaAlunos) {
    //    if (aluno.email == user) {
    //      return aluno.id;
    //    }
    //  }
    //  return undefined;
    return 3;
   }
}

