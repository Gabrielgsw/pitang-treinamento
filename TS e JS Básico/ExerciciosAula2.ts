//1

const meuNome: string = "Gabriel";

console.log(meuNome);

//2
const estaChovendo: boolean = true

console.log(estaChovendo);

//3

let dataMarcante: string = "26/01/2003";

//4

const idade: number = 30;

//idade = 32; //erro

//5

const lista: number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(lista)

//6

type Aluno  = {
    nome : string;
    idade : number;
    cidade : string,
    endereco : string,
    bairro : string,
    instituicao : string,
    curso : string,
    turno : string,
    periodoAtual : number,
    matricula : string,
    cpf : string,
    telefone : string,
    parentes :{
        pai : string,
        mae : string
    }


}

const aluno: Aluno  = {
    nome : "Gabriel Germano",
    idade : 23,
    cidade : "Recife",
    endereco : "Rua das moças, 77",
    bairro : "Arruda",
    instituicao : "Universidade Federal Rural de Pernambuco",
    curso : "Bacharelado em Ciência da Computação",
    turno : "Vespertino",
    periodoAtual : 6,
    matricula : "198719871987",
    cpf : "7789076432",
    telefone : "81996585021",
    parentes :{
        pai : "Mauro Germano",
        mae : "Maurivane Wanderley"
    }


}

console.log(aluno)


//7

const dados = {
    meuNome,
    estaChovendo,
    dataMarcante,
    idade
}

console.log(dados)

//8

let x: number = 10;
x *= Math.random() * 5;
console.log(x)

//9

const listObj: Aluno[] = [aluno,{
    nome : "Joãozinho",
    idade : 22,
    cidade : "Recife",
    endereco : "Rua das flores, 87",
    bairro : "Poço da Panela",
    instituicao : "Universidade Federal Rural de Pernambuco",
    curso : "Bacharelado em Sistemas de Informação",
    turno : "Matutino",
    periodoAtual : 9,
    matricula : "198719871323287",
    cpf : "99088744532",
    telefone : "78999004334",
    parentes :{
        pai : "Robson",
        mae : "Juliette"
    }
}]

console.log(listObj)

//10

let numero: number = 5;
numero *= 3; 
console.log(numero);

