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



//