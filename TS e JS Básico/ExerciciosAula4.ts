class AutomovelV1 {

    protected nome: String;
    protected marca: String;
    protected modelo: String;
    protected paisOrigem: String;
    protected tipoCombustivel: String;

    constructor(nome: String, marca: String, modelo: String, paisOrigem: String, tipoCombustivel: String){
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
        this.tipoCombustivel = tipoCombustivel;
    }

    getNome(){
        return this.nome;
    }

    getMarca(){
        return this.marca;
    }

    getModelo(){
        return this.modelo;
    }

    getPaisOrigem(){
        return this.paisOrigem;
    }

    getTipoCombustivel(){
        return this.tipoCombustivel;
    }
}


class Carro extends AutomovelV1{

    private velocidadeMax: number;
    private numeroRodas: number;
    private temStep: boolean;
    private ocupantes: number;

    constructor(nome: String, marca: String, modelo: String, paisOrigem: String, tipoCombustivel: String, velocidadeMax: number, numeroRodas: number, temStep: boolean, ocupantes: number){
        super(nome,marca,modelo,paisOrigem,tipoCombustivel);
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas = numeroRodas;
        this.temStep = temStep;
        this.ocupantes = ocupantes;
    }


    getVelocidadeMax(){
        return this.velocidadeMax;
    }

    getNumeroRodas(){
        return this.numeroRodas;
    }

    getTemStep(){
        return this.temStep;
    }

    getOcupantes(){
        return this.ocupantes;
    }
}