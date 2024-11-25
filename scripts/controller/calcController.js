class CalcController{

    

    constructor(){
        //palavra reservada THIS para referenciar atributos e objetos
        //Adicionar EL ao final da variavel é uma prática de costume para indiccar que estamos mexendo em um ELemento
        this.locale = "pt-BR"
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.inicialize();
        
    }

    inicialize(){
        //Método que irá iniciar tudo o que ocorrerá na calculadora

        //chamando Método para mostrar data e hora no momento em que abrimos a página
        this.setDisplayDateTime()

        //Metodo para atualizar a data ser atualizada a cada segundo
       setInterval(()=>{
        this.setDisplayDateTime()
       },1000)

    }
    //Metodo para otimizar escrita do metodo inicialize, contem a data atual e horario
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
    }

    get displayTime(){
        //MEtodo GET para atribuir valor 
        return this._timeEl.innerHTML;
    }

    set displayTime(value){ 
        this._timeEl.innerHTML = value
        //SET para colocar o valor
    }
    get displayDate(){
        //MEtodo GET para atribuir valor 
        return this._dateEl.innerHTML;
    }

    set displayDate(value){ 
        this._dateEl.innerHTML = value
        //SET para colocar o valor
    }


    get displayCalc(){
        //GETTER - Pegar o valor do atributo displayCalc
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        //SETTER - Colocar um value dentro do atributo display calc. Precisa necessáriamente de um parametro (value) para ser atribuido 
        this._displayCalcEl.innerHTML = value ;

    }

    get currentDate(){
        return new Date()
    }

    set currentDate(value){
        this.currentDate = value
    }
   






}


/*  -Todas as regras de negócio deverão estar dentro desta classe

    -Dentro de uma classe deveremos ter variaveis e funções (atributos e metodos)

    -Objeto representa a classe, por meio dele que chamamos a classe
*/