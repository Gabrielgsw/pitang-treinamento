//1

class Automovel{

    public nome: string;
    public marca: string;
    public modelo: string;
    public paisOrigem?: string;

    constructor(nome: string, marca: string,modelo: string,paisOrigem: string){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
    }

    getAutomovel(){
        return `Nome: ${this.nome}\nMarca: ${this.marca}\nModelo: ${this.modelo}\nPaís Origem: ${this.paisOrigem}`
    }
    

}


const car: Automovel = new Automovel("bom","ss","teste","oi");
console.log(car.getAutomovel());

//2

const automoveis: Automovel[] = [car,new Automovel("Onibus","Mercedes","Barro/Macaxeira","Brasil"), new Automovel("Carro","Fiat","Palio","Italia")];
console.log(automoveis)

//3 e 4

for (let automovel of automoveis) {
    console.log(`Nome: ${automovel.nome} e Marca: ${automovel.marca}`)
    for(let key in automovel){
        console.log(`keys: ${key}`)
    }
    console.log("\n\n")
}


// Parte 2

let auto: Automovel = new Automovel("Carro","Hyundai","HB20","Brasil");

const autov2: Automovel = {
    ...auto,
    cor: "Preto"

    

}; 

delete autov2.paisOrigem;
//auto.cor= "Preto";
console.log(autov2)