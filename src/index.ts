// let a:number = 1

// let nome:string = "Felipe"

// let vetor:number[] = [1,2,3]

// let vetorStrings:string[] = ["oi"]


// // console.log(a)

// const f = (variavel:number):number=> 10
// const f3 = f(10)
// console.log("O valor de x é " + f3.toString())

// //Terminem essa função para retornar a soma de todos os elementos de um vetor 
// // somaVetor([1,2,3]) => 6 
// // somaVetor([1,2,3,4]) => 10 



// function somaVetor(numeros:number[]):number{
//     let soma = 0
// for (let i = 0; i < vetor.length; i++) {
//    const element = vetor[i]

//     soma = soma + element!
// }
// return soma

// }

// console.log(`O valor é ${somaVetor([1,2,3,4])}`)

// // Some as posições de um vetor que são pares

// function somaPares(numeros:number[]):number{
//     let soma = 0
//     for (let i = 0; i < numeros.length; i++) {
//         let element = numeros[i] 
//         if ( element! % 2 ==0) {
//             soma =soma + element!
//         }
//     }
//     return soma

// }

// console.log(`O valor é: ${somaPares([1,2,3,4])}`)


// //faça uma função que receba 2 vetores e faça a operação de merge entre eles
// //ex: mergeVetor([1,2,3],[4,5,6]) => [1,2,3,4,5,6]

// function juntaVetor(junta1:number[], junta2:number[]):any{

//     let resultado = junta1.concat(junta2)
//     return resultado
// }

// console.log(juntaVetor([1,2,3], [4,5,6]))


//Promessas 
//Síncronas -> linha por linha                  assíncronas -> várias coisas ao mesmo tempo 

// //Paralelismo -> paralelo
// console.log("Início da execução do código")
// //async function funcao(){
// const funcao = async () =>{
//     const prom = 
//     new Promise<string>((resolve,reject)=>{
        
//         setTimeout(function handle (){
    
//             reject("Executei a função")
    
//         },5000)
//     })
//     return prom
    
// }
// try{

//     const resultado = await funcao()
//     console.log(resultado)
// }
// catch(erro){
//     console.log("Erro:"+ erro)
// }


// // funcao().then((resultado)=>console.log(resultado))
// // .catch((erro)=>console.log("Erro  Promise:" + erro))
// //console.log(funcao())
// console.log("Fim da execução do código")



// // Crie uma função que tenha 50% de chance de retornar "tere" após 
// // 5 segundos ou a função devolve o valor null 
// // function devolveTere()
// // e faça o tratamento do erro com o try e catch.



//funções de vetores -> revisão 

// //FIND
  const vetor = [1,2,3,4,5,6,7]
// //procurar-> find
// //ele procura o que nós mandarmos

// function entrarVetor(num:number) {
//     return num == 3
// }
// console.log(vetor.find(entrarVetor))


// FILTRA
const pessoas = [{id:1,nome:"Tere"}, {id:2,nome:"Marcelo"}]
console.log(pessoas.filter((p)=>p.id>=1))

//MAP
//Tbm vamos passar uma funçãoem cada elemento do vetor
//E criar um novo vetor transformado pela função

const r = vetor.map((x:number)=> x*x)
console.log(r)

// SPREAD
const vetor2 = vetor
const vetor3 = [...vetor, ...vetor]
vetor2[0] = 10
vetor3[1] = 10
console.log(vetor3)

const [posicao1, posicao2,...resto] = vetor3
console.log(posicao1, posicao2, resto)


