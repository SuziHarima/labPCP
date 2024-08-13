import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private router: Router){}

  @Input() isAdmin: boolean | undefined;
  
  @Input() element: 
  {
    nome: string,
    dataNascimento: string,
    contato: string;
    rota: string
  } | undefined;

  redirect(){
    if(this.isAdmin) {
      this.router.navigate(['/aluno'])
    } else {
      this.router.navigate(['/nota'])
    }
  }

}
