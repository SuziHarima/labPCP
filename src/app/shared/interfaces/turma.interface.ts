export class Turma {
    id:number;
    nome:string;
    dataInicio:string;
    dataTermino:string;
    horario:string;
    professor:string;

    constructor(id:number, nome:string, dataInicio:string, dataTermino:string, horario:string, professor:string){
        this.id = id;
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
        this.horario = horario;
        this.professor = professor
    }
}