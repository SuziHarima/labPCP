import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BuscaCepService } from '../shared/services/busca-cep.service';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {

  studentRegisterForm!: FormGroup;

  ngOnInit(): void {
    this.studentRegisterForm = new FormGroup({
      nome: new FormControl(''),
      genero: new FormControl(''),
      dataNascimento: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      naturalidade: new FormControl(''),
      cep: new FormControl(''),
      localidade: new FormControl(''),
      uf: new FormControl(''),
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      referencia: new FormControl(''),
      turma: new FormControl('')
    })
  }

  constructor(private buscaCepService: BuscaCepService){}

  buscarCep() {
    if (this.studentRegisterForm.value.cep) {
      this.buscaCepService.buscarCep(this.studentRegisterForm.value.cep).subscribe({
        next: (retorno) => {
          if ((retorno as any).erro) {
            window.alert('CEP digitado inválido');
          } else {
            this.studentRegisterForm.patchValue(retorno);
          }
        },
        error: (err) => {
          window.alert('Ocorreu um erro ao buscar o CEP digitado');
          console.log(err);
        },
      });
    }
  }

}
