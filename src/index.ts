let a:number = 1

let nome:string = "Felipe"

let vetor:number[] = [1,2,3]

let vetorStrings:string[] = ["oi"]


// console.log(a)

const f = (variavel:number):number=> 10
const f3 = f(10)
console.log("O valor de x é " + f3.toString())

//Terminem essa função para retornar a soma de todos os elementos de um vetor 
// somaVetor([1,2,3]) => 6 
// somaVetor([1,2,3,4]) => 10 



function somaVetor(numeros:number[]):number{
    let soma = 0
for (let i = 0; i < vetor.length; i++) {
   const element = vetor[i]

    soma = soma + element!
}
return soma

}

console.log(`O valor é ${somaVetor([1,2,3,4])}`)

// Some as posições de um vetor que são pares

function somaPares(numeros:number[]):number{
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        let element = numeros[i] 
        if ( element! % 2 ==0) {
            soma =soma + element!
        }
    }
    return soma
    
}

console.log(`O valor é: ${somaPares([1,2,3,4])}`)


//faça uma função que receba 2 vetores e faça a operação de merge entre eles
//ex: mergeVetor([1,2,3],[4,5,6]) => [1,2,3,4,5,6]

function juntaVetor(junta1:number[], junta2:number[]):any{
    
    let resultado = junta1.concat(junta2)
    return resultado
}

console.log(juntaVetor([1,2,3], [4,5,6]))



/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código

function criaNovoVetor(vetorC:number[], valor1:number, valor2:number) {
    let novoVetor = vetorC.concat(valor1, valor2)
    return novoVetor
}

console.log(criaNovoVetor([1,2,3], 0, 0))

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código
function divisivelPor11(min:number, max:number) {
    for (let i = min; i <= max; i++) {
        let resultado:number[] = []
    
        if (i % 11 == 0) {
            resultado.push(i)
        }
        return resultado
    }
}

console.log(divisivelPor11(1,101))

//Fim do seu código
