export class Docente {
    id: number;
    nome: string;
    genero: string;
    dataNascimento: string;
    cpf: string;
    rg: string;
    estadoCivil: string;
    telefone: string;
    email: string;
    senha: string;
    naturalidade: string;
    endereço: string;
    materias:string;

    constructor(id:number, nome: string, genero:string, dataNascimento:string, cpf:string, rg:string, estadoCivil:string, telefone:string, email:string, senha:string, naturalidade:string, endereco:string, materias:string){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.rg = rg;
        this.estadoCivil = estadoCivil;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.naturalidade = naturalidade;
        this.endereço = endereco;
        this.materias = materias
    }
}