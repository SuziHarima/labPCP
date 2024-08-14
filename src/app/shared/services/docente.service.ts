import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  // listaDocentes: Array<Docente>;
  url = 'http://localhost:3000/docentes';

  constructor(private httpClient: HttpClient) {
    // this.listaDocentes = [
    //   {
    //     id: '1',
    //     nome: 'docente1',
    //     genero: '',
    //     dataNascimento: '',
    //     cpf: '',
    //     rg: '',
    //     estadoCivil: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     naturalidade: '',
    //     endereço: '',
    //     materias:''
    //   },
    //   {
    //     id: '2',
    //     nome: 'docente2',
    //     genero: '',
    //     dataNascimento: '',
    //     cpf: '',
    //     rg: '',
    //     estadoCivil: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     naturalidade: '',
    //     endereço: '',
    //     materias:''
    //   },
    //   {
    //     id: '3',
    //     nome: 'docente3',
    //     genero: '',
    //     dataNascimento: '',
    //     cpf: '',
    //     rg: '',
    //     estadoCivil: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     naturalidade: '',
    //     endereço: '',
    //     materias:''
    //   },
    //   {
    //     id: '4',
    //     nome: 'docente4',
    //     genero: '',
    //     dataNascimento: '',
    //     cpf: '',
    //     rg: '',
    //     estadoCivil: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     naturalidade: '',
    //     endereço: '',
    //     materias:''
    //   },
    //   {
    //     id: '5',
    //     nome: 'docente5',
    //     genero: '',
    //     dataNascimento: '',
    //     cpf: '',
    //     rg: '',
    //     estadoCivil: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     naturalidade: '',
    //     endereço: '',
    //     materias:''
    //   }
    // ]
  }
  
  getDocentes() {
    return this.httpClient.get<Array<Docente>>(this.url);
  }

  getDocente(id: string) {
    return this.httpClient.get<Docente>(this.url + `/${id}`);
  }
  
  postDocente(docente: Docente) {
    return this.httpClient.post<any>(this.url, docente);
  }
  
  putDocente(docente: Docente) {
    return this.httpClient.put<any>(this.url + `/${docente.id}`, docente);
  }
  
  deleteDocente(id: string) {
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }
}