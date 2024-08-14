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
    id:string,
    nome: string,
    dataNascimento: string,
    telefone: string;
  } | undefined;

  redirect(){
    if(this.isAdmin) {
      this.router.navigate([`/aluno/${this.element?.id}`])
    } else {
      this.router.navigate(['/nota'])
    }
  }

}
