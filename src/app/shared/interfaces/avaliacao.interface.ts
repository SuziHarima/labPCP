export class Avaliacao {
    id: number;
    idAluno: number;
    nome: string;
    data: string;
    materia: string;
    nota: number;

    constructor(id:number, idAluno:number, nome:string, data:string, materia:string, nota: number){
        this.id = id;
        this.idAluno = idAluno;
        this.nome = nome;
        this.data = data;
        this.materia = materia;
        this.nota = nota;
    }
}