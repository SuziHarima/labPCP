import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {

  constructor(private router: Router) {}

  logout(){
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

}
