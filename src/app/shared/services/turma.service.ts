import { Injectable } from '@angular/core';
import { Turma } from '../interfaces/turma.interface';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  listaTurmas: Array<Turma>;

  constructor() {
    this.listaTurmas = [
      {
        id: 1,
        nome:'turma1',
        dataInicio:'',
        dataTermino:'',
        horario:'',
        professor:'',
      },
      {
        id: 2,
        nome:'turma2',
        dataInicio:'',
        dataTermino:'',
        horario:'',
        professor:'',
      },
      {
        id: 3,
        nome:'turma3',
        dataInicio:'',
        dataTermino:'',
        horario:'',
        professor:'',
      },
      {
        id: 4,
        nome:'turma4',
        dataInicio:'',
        dataTermino:'',
        horario:'',
        professor:'',
      }
    ]
  }

  getTurmas() {
    return this.listaTurmas
   }
}
