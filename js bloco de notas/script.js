"use strict";

class Obra {
constructor(tipo) {
    this.tipo = tipo;
}
typeName (tipo){
    return this.tipo;
}
}

class filme extends Obra {
    titulo;
    ano;
    constructor(titulo, ano) {
    super ("Filme");
    this.titulo = titulo;
    this.ano = ano; 
}
changeNameAndYear(){
    document.querySelector("h1").textContent = this.titulo; 
    document.querySelector("h3").textContent = this.ano; 
}
}


const topGun = new filme("Top Gun: Maverick", 2020);
topGun.changeNameAndYear();
