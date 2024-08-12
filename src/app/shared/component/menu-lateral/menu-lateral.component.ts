import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {

  constructor(private router: Router, private elementRef: ElementRef) {
    this.adminVerification()
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

  adminVerification(): boolean {
    let loggedUser = JSON.parse(localStorage.getItem("userData")!);
    console.log(loggedUser.profile)
    if(loggedUser.profile == 'admin') {
      return true
    } 
    return false
  }

  adminDocenteVerification(): boolean {
    let loggedUser = JSON.parse(localStorage.getItem("userData")!);
    console.log(loggedUser.profile)
    if(loggedUser.profile == 'admin' || loggedUser.profile == 'docente') {
      return true
    } 
    return false
  }

  alunoVerification(): boolean {
    let loggedUser = JSON.parse(localStorage.getItem("userData")!);
    console.log(loggedUser.profile)
    if(loggedUser.profile == 'aluno') {
      return true
    } 
    return false
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
