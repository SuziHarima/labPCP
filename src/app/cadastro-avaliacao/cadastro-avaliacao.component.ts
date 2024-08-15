import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from '../shared/services/avaliacao.service';
import { DocenteService } from '../shared/services/docente.service';
import { MateriaService } from '../shared/services/materia.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-cadastro-avaliacao',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-avaliacao.component.html',
  styleUrl: './cadastro-avaliacao.component.scss'
})
export class CadastroAvaliacaoComponent {
  avaliacaoRegisterForm!: FormGroup;
  idAvaliacao!: string;
  listaMaterias: Array<string> = [];
  listaDocentes: Array<string> = [];
  listaAlunos: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private avaliacaoService: AvaliacaoService,
    private docenteService: DocenteService,
    private materiaService: MateriaService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.materiaService.getMaterias().forEach(
      (materia) => this.listaMaterias.push(materia.nome)
    );
    
    this.avaliacaoRegisterForm = new FormGroup({
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

    this.idAvaliacao = this.activatedRoute.snapshot.params['id'];
    if (this.idAvaliacao) {
      this.avaliacaoService.getAvaliacao(this.idAvaliacao).subscribe((retorno) => {
        if (retorno) {
          this.avaliacaoRegisterForm.patchValue(retorno);
        }
      });
    }
  }

  save() {
    if (this.avaliacaoRegisterForm.valid) {
      this.avaliacaoService.postAvaliacao(this.avaliacaoRegisterForm.value).subscribe(() => {
        window.alert('Avaliacao salvo com sucesso');
      });
    } else {
      this.avaliacaoRegisterForm.markAllAsTouched();
      window.alert('Peencha os campos corretamente')
    }
  }

  edit() {
    let formData = this.avaliacaoRegisterForm.value;
    formData.id = this.idAvaliacao!;
    this.avaliacaoService.putAvaliacao(formData).subscribe(() => {
      window.alert('Avaliacao editado com sucesso');
    });
  }

  deleteAvaliacao(){
    this.avaliacaoService.deleteAvaliacao(this.idAvaliacao).subscribe(() => {
      window.alert('Avaliacao deletado com sucesso');
    });
  }

  profile(perfil: string): boolean {
    return this.userService.verifyProfile(perfil)
  }
}
