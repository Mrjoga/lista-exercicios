
//1. Crie uma função que receba um array que calcule a soma de todos os elementos.

function somaValores(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}


const resultado = somaValores([a, b, c]);
console.log(resultado);

//2. Crie uma função que receba um array e retorne o maior elemento.

function maiorElemento(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

//3. Crie uma função que receba um array e retorne quantos números são pares.

function numerosPares(array) {
    let contador = 0;
    for ( let i = 0; i < array.length; i++) {
        if (array[i] / 2 === 0) {
            contador++;
        }
    }
    return contador;
}

//4. Crie uma função que receba um array e retorna a média aritmética de todos os elementos de um array.

function mediaAritmetica(array) {
    let soma = 0;6
    for (let i = 0; i < array.length; i++){
        soma = soma + array[i];
    
    }
    return soma / array.length;
}

//5. Crie um procedimento que receba um array e conte a quantidade de números positivos e negativos, em seguida escreva estes valores no terminal. 
//(considere 0 positivo)

function PositivosNegativos(array) {
    let positivos = 0;
    let negativos = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positivos++;
        } else {
            negativos++;
        }
    }

    console.log("Positivos: " + positivos + ", Negativos: " + negativos);
}

//6. Crie uma função que receba um array e um número, e retorne um novo array onde todos os elementos do array de entrada foram multiplicados pelo número recebido.

function mutiplicarArray(array, numero) {
    const novoArray=[];
    for (let i = 0; i < array.length; i++){
       novoArray=  array[i]*numero;
    }
    return novoArray;
}
