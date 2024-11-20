class CalcController{

    

    constructor(){
        //palavra reservada THIS para referenciar atributos e objetos
         this._displayCalc = "0";
         this._dataAtual;
    }

    get displayCalc(){
        //GETTER - Pegar o valor do atributo displayCalc
        return this.displayCalc;
    }

    set displayCalc(valor){
        //SETTER - Colocar um valor dentro do atributo display calc. Precisa necessáriamente de um parametro (valor) para ser atribuido 
        this._displayCalc = valor ;

    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(data){
        this._dataAtual = data
    }






}


/*  -Todas as regras de negócio deverão estar dentro desta classe

    -Dentro de uma classe deveremos ter variaveis e funções (atributos e metodos)

    -Objeto representa a classe, por meio dele que chamamos a classe
*/