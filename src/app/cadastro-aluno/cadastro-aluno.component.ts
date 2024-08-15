import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BuscaCepService } from '../shared/services/busca-cep.service';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../shared/services/aluno.service';
import { Aluno } from '../shared/interfaces/aluno.interface';
import { CommonModule } from '@angular/common';
import { Turma } from '../shared/interfaces/turma.interface';
import { TurmaService } from '../shared/services/turma.service';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {

  studentRegisterForm!: FormGroup;
  idAluno!: string;
  listaTurmas: Array<string> = [];

  ngOnInit(): void {
    this.turmaService.getTurmas().forEach(
      (turma) => this.listaTurmas.push(turma.nome)
    );
    
    
    this.studentRegisterForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required ),
      dataNascimento: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl(''),
      senha: new FormControl('', Validators.required),
      naturalidade: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      localidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      referencia: new FormControl('', Validators.required),
      turmas: new FormControl('', Validators.required)
    });

    this.idAluno = this.activatedRoute.snapshot.params['id'];
    console.log(this.idAluno)
    if (this.idAluno) {
      this.alunoService.getAluno(this.idAluno).subscribe((retorno) => {
        if (retorno) {
          this.studentRegisterForm.patchValue(retorno);
        }
      });
    }
  }

  constructor(
    private buscaCepService: BuscaCepService, 
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private turmaService: TurmaService
  ){}

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


  save() {
    if (this.studentRegisterForm.valid) {
      this.alunoService.postAluno(this.studentRegisterForm.value).subscribe(() => {
        window.alert('Aluno salvo com sucesso');
      });
    } else {
      this.studentRegisterForm.markAllAsTouched();
      window.alert('Peencha os campos corretamente')
    }
  }

  edit() {
    let formData = this.studentRegisterForm.value;
    formData.id = this.idAluno!;
    this.alunoService.putAluno(formData).subscribe(() => {
      window.alert('Aluno editado com sucesso');
    });
  }

  deleteAluno(){
    this.alunoService.deleteAluno(this.idAluno).subscribe(() => {
      window.alert('Aluno deletado com sucesso');
    });
  }

}
