import { Injectable } from '@angular/core';
import { Materia } from '../interfaces/materia.interface';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  listaMaterias: Array<Materia>;

  constructor() {
    this.listaMaterias = [
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
      },
      {
        id: 4,
        nome: 'Português',
      },
      {
        id: 5,
        nome: 'Geografia',
      }
    ]
  }

  getMaterias() {
    return this.listaMaterias
   }
}
