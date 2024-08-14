import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { BuscaCepService } from '../shared/services/busca-cep.service';
import { DocenteService } from '../shared/services/docente.service';
import { MateriaService } from '../shared/services/materia.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-cadastro-docente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './cadastro-docente.component.html',
  styleUrl: './cadastro-docente.component.scss'
})
export class CadastroDocenteComponent {
  docenteRegisterForm!: FormGroup;
  idDocente!: string;
  listaMaterias: Array<string> = [];

  constructor(
    private buscaCepService: BuscaCepService, 
    private activatedRoute: ActivatedRoute,
    private docenteService: DocenteService,
    private materiaService: MateriaService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    if (!this.admin()) {
      window.alert('Perfil atual não é de Administrador.');
    }

    this.materiaService.getMaterias().forEach(
      (materia) => this.listaMaterias.push(materia.nome)
    );
    
    this.docenteRegisterForm = new FormGroup({
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
      materias: new FormControl('', Validators.required)
    });

    this.idDocente = this.activatedRoute.snapshot.params['id'];
    if (this.idDocente) {
      this.docenteService.getDocente(this.idDocente).subscribe((retorno) => {
        if (retorno) {
          this.docenteRegisterForm.patchValue(retorno);
        }
      });
    }
  }

  buscarCep() {
    if (this.docenteRegisterForm.value.cep) {
      this.buscaCepService.buscarCep(this.docenteRegisterForm.value.cep).subscribe({
        next: (retorno) => {
          if ((retorno as any).erro) {
            window.alert('CEP digitado inválido');
          } else {
            this.docenteRegisterForm.patchValue(retorno);
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
    if (this.docenteRegisterForm.valid) {
      this.docenteService.postDocente(this.docenteRegisterForm.value).subscribe(() => {
        window.alert('Docente salvo com sucesso');
      });
    } else {
      this.docenteRegisterForm.markAllAsTouched();
      window.alert('Peencha os campos corretamente')
    }
  }

  edit() {
    let formData = this.docenteRegisterForm.value;
    formData.id = this.idDocente!;
    this.docenteService.putDocente(formData).subscribe(() => {
      window.alert('Docente editado com sucesso');
    });
  }

  deleteDocente(){
    this.docenteService.deleteDocente(this.idDocente).subscribe(() => {
      window.alert('Docente deletado com sucesso');
    });
  }

  admin(): boolean {
    return this.userService.verifyProfile('admin')
  }
}
