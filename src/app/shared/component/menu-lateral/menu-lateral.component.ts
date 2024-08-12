import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {

  constructor(private router: Router, private elementRef: ElementRef, private userService: UserService) {
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

  sendHome(){
    this.router.navigate(['/home'])
  }
  
  sendDocente(){
    this.router.navigate(['/docente'])
  }
  
  sendAluno(){
    this.router.navigate(['/aluno'])
  }
  
  sendTurma(){
    this.router.navigate(['/turma'])
  }
  
  sendAvaliacao(){
    this.router.navigate(['/avaliacao'])
  }
  
  sendDocenteList(){
    this.router.navigate(['/docent-list'])
  }
  
  sendNotas(){
    this.router.navigate(['/notas'])
  }

  admin(){
    return this.userService.verifyProfile('admin')
  }

  adminDocente(){
    return this.userService.adminDocenteVerification()
  }

  aluno(){
    return this.userService.verifyProfile('aluno')
  }

  sideBar(){
    let menu = document.getElementsByClassName('menu-lateral')
    if(menu.length > 0){
      menu[0].className = 'bar-closed';
    } else {
      document.getElementsByClassName('bar-closed')[0].className = 'menu-lateral'
    }
  }

}
