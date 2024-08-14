import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente.interface';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  listaDocentes: Array<Docente>;

  constructor() {
    this.listaDocentes = [
      {
        id: 1,
        nome: 'docente1',
        genero: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        estadoCivil: '',
        telefone: '',
        email: '',
        senha: '',
        naturalidade: '',
        endereço: '',
        materias:''
      },
      {
        id: 2,
        nome: 'docente2',
        genero: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        estadoCivil: '',
        telefone: '',
        email: '',
        senha: '',
        naturalidade: '',
        endereço: '',
        materias:''
      },
      {
        id: 3,
        nome: 'docente3',
        genero: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        estadoCivil: '',
        telefone: '',
        email: '',
        senha: '',
        naturalidade: '',
        endereço: '',
        materias:''
      },
      {
        id: 4,
        nome: 'docente4',
        genero: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        estadoCivil: '',
        telefone: '',
        email: '',
        senha: '',
        naturalidade: '',
        endereço: '',
        materias:''
      },
      {
        id: 5,
        nome: 'docente5',
        genero: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        estadoCivil: '',
        telefone: '',
        email: '',
        senha: '',
        naturalidade: '',
        endereço: '',
        materias:''
      }
    ]
  }
  
  getDocentes() {
    return this.listaDocentes
   }
}