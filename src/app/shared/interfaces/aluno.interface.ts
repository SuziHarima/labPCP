export class Aluno {
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

    constructor(nome: string, genero:string, dataNascimento:string, cpf:string, rg:string, telefone:string, email:string, senha:string, naturalidade:string, endereco:string, turma:string){
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