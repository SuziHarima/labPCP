export class Aluno {
    id: string;
    nome: string;
    genero: string;
    dataNascimento: string;
    cpf: string;
    rg: string;
    telefone: string;
    email: string;
    senha: string;
    naturalidade: string;
    endereço: string;
    turma:string;

    constructor(id:string, nome: string, genero:string, dataNascimento:string, cpf:string, rg:string, telefone:string, email:string, senha:string, naturalidade:string, endereco:string, turma:string){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.naturalidade = naturalidade;
        this.endereço = endereco;
        this.turma = turma
    }
}