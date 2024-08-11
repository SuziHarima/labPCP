import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUsers: Array<User>;

  constructor() {
    this.listaUsers = [
      {
        id: 1,
        login: 'user1',
        password: 'user1pass',
        profile: 'admin',
      },
      {
        id: 2,
        login: 'user2',
        password: 'user2pass',
        profile: 'docente',
      },
      {
        id: 3,
        login: 'user3',
        password: 'user3pass',
        profile: 'aluno',
      }
    ]
   }

   getUsers() {
    return this.listaUsers
   }


}


