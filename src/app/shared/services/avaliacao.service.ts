import { Injectable } from '@angular/core';
import { Avaliacao } from '../interfaces/avaliacao.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  filteredList: Array<Avaliacao> = [];
  url = 'http://localhost:3000/avaliacoes';

  constructor(private httpClient: HttpClient) {
  }
  
  getAvaliacoes() {
    return this.httpClient.get<Array<Avaliacao>>(this.url);
  }

  getAvaliacao(id: string) {
    return this.httpClient.get<Avaliacao>(this.url + `/${id}`);
  }
  
  postAvaliacao(avaliacao: Avaliacao) {
    return this.httpClient.post<any>(this.url, avaliacao);
  }
  
  putAvaliacao(avaliacao: Avaliacao) {
    return this.httpClient.put<any>(this.url + `/${avaliacao.id}`, avaliacao);
  }
  
  deleteAvaliacao(id: string) {
    return this.httpClient.delete<any>(this.url + `/${id}`);
  }

  getAvaliacoesByAluno(idAluno: number) {
    this.httpClient.get<Array<Avaliacao>>(this.url + `?idAluno=${idAluno}`).subscribe(
      (retorno) => {
        this.filteredList = retorno;
      }
    );
    return this.filteredList;
  }

  
}
