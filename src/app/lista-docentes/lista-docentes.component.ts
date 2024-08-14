import { Component, OnInit } from '@angular/core';
import { Docente } from '../shared/interfaces/docente.interface';
import { UserService } from '../shared/services/user.service';
import { DocenteService } from '../shared/services/docente.service';
import { CardComponent } from '../shared/component/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-docentes',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './lista-docentes.component.html',
  styleUrl: './lista-docentes.component.scss'
})
export class ListaDocentesComponent implements OnInit {
  listaDocentes: Array<Docente> = [];
  textoPesquisa: string | undefined;
  listaDocentesPesquisa: Array<Docente> = [];

  constructor(private router: Router,
    private userService: UserService, 
    private docenteService: DocenteService){
    
    // docenteService.getDocentes().subscribe((retorno) => {
    //   this.listaDocentes = retorno;
    //   this.listaAlunosPesquisa = this.listaAlunos;
    //   this.listaStatistics[0].numero = this.listaAlunos.length;
    // });
    
    docenteService.getDocentes().subscribe((retorno) => {
      this.listaDocentes = retorno;
      this.listaDocentesPesquisa = this.listaDocentes;
    });
  }

  ngOnInit(): void {
    if (!this.admin()) {
      window.alert('Perfil atual não é de Administrador.');
      this.router.navigate(['/home']);
    }
  }

  admin(){
    return this.userService.verifyProfile('admin')
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listaDocentesPesquisa = this.listaDocentes.filter((docente) =>
        docente.nome.toUpperCase().includes(this.textoPesquisa!.toUpperCase()) || 
        docente.id.toUpperCase().includes(this.textoPesquisa!.toUpperCase())
      );
    } else {
      this.listaDocentesPesquisa = this.listaDocentes;
    }
  }
}
