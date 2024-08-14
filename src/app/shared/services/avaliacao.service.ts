import { Injectable } from '@angular/core';
import { Avaliacao } from '../interfaces/avaliacao.interface';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  listaAvaliacoes: Array<Avaliacao>;

  constructor() {
    this.listaAvaliacoes = [
      {
        id: 1,
        idAluno: 3,
        nome: 'Teste AV1',
        data: '12/03/2024',
        materia: 'Matemática',
        nota: 8,
      },
      {
        id: 2,
        idAluno: 3,
        nome: 'Teste AV2',
        data: '12/04/2024',
        materia: 'Matemática',
        nota: 7,
      },
      {
        id: 3,
        idAluno: 3,
        nome: 'Seminário',
        data: '12/05/2024',
        materia: 'História',
        nota: 10,
      }
    ]
  }

  getAvaliacoes(idAluno: number) {
    let filtered: Array<Avaliacao> = [];
    for (let avaliacao of this.listaAvaliacoes) {
      if (avaliacao.idAluno == idAluno) {
        filtered.push(avaliacao);
      }
    }
    return filtered;
  }
}
