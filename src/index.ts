import mysql from 'mysql2/promise'
import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js';
import  connection from './mysql_connection.js';
import { type RowDataPacket } from "mysql2";
import { time } from 'node:console';
interface Ipizza extends RowDataPacket{
  id:number
  nome:string
  preco:number
  tamanho:string
  data_criacao:Date
}

const app = express()
app.use(express.json())













// Questão 1. (1,0 ponto) Explique com suas palavras o que a rota abaixo faz e explique qual o problema desse código caso fosse armazenado um atributo de senha na tabela pessoa.
// app.get("/pessoas", async (req, res) => {
//     const [dados,campos] = await connection.execute('SELECT * FROM pessoa')
//     res.status(200).json(dados)
// })

// R: A rota pessoas mostra todos os atributos cadastrados na tabela pessoa. O problema é que ele retornaria a senha para o usuário final, assim a pessoa poderia ver a senha cadastrada sendo um grave erro de segurança.

// Questão 2. (1,0 ponto) Explique o que é o typescripte para que ele serve. 
// R: O Typescript é uma linguagem de programação parecida com o JavaScrip. Mas o diferencial nela é a facilidade de achar erros, por conta que ele acusa vários tipos de erro e definir o tipo da variavel facilitando para o programador a codificação e a leitura de erros que possam estar explicítos.

// Questão 3. (1,0 ponto) Para que serve o express.json() no código feito em sala de aula e o que acontece se eu não colocar ele no código?
// R: O Express é um modulo que se instala para simplificar a programação. Utilizado para criar rotas e APIs web de forma simples.

//Questão 4. (2,0 pontos) Considerando o código de banco de dados passado para resolução de prova, crie uma rota para cadastro de pizzas


// app.post("/cadastro_pizza", async (req, res) => {
//   try {
//     // "execute" irá chamar internamente a preparação e a consulta (query)
//     // const preparacao = await connection.prepare("select * from pessoa");
//     const { id_pizza, nome_pizza, tamanho_pizza, preco_pizza, data_criacao_pizza} = req.body
//     //Valide se o id e o nome foram passados corretamente. (Algum valor)
//     //Se não foram, retone o código 400 com a mensagem "id ou nome inválidos"
//     //Não deixe o código executar a parte de baixo quando for inválido.

//     if (id_pizza != null || id_pizza < 0 || nome_pizza == "" ||  preco_pizza <= 0 ) {
//   return res.status(500).json({ mensagem: "Id ou nome inválidos" })
// }

//     const [resultado, campos]
//       = await connection.execute(`insert into pizza value (?,?,?,?,?)`, [ id_pizza, nome_pizza, tamanho_pizza, preco_pizza, data_criacao_pizza ])
     
//     res.status(201).json({ mesagem: "Sucesso" })
//     console.log(resultado)
//   } catch (err) {0
//     const mysqlErrorHandle = new MysqlErrorHandle(err, res)
// mysqlErrorHandle.validar()

//   }
// }) 

// // essa bomba estava funcionando, que raiva!!

// app.get("/listar_pizzas", async (req, res) => {
//   try {

    
//     const [resultado, campos]
//       = await connection.execute(`SELECT nome, tamanho, preco FROM pizza`)
//     console.log(resultado)
//     res.status(200).json(resultado)
//   } catch (err) {
//     const mysqlErrorHandle = new MysqlErrorHandle(err, res)
// mysqlErrorHandle.validar()
//   }

// })


// app.get("/listar_pizzas_grandes", async (req, res) => {
//   try {

    
//     const [resultado, campos]
//       = await connection.execute<Ipizza[]>(`SELECT id, nome, preco, data_criacao  FROM pizza WHERE tamanho = "grandes"`)
//     const resultado_transformado = resultado.map(pizza=>{
//       const obj = {
//         "id_pizza":pizza.id,
//         "nome_pizza":pizza.nome,
//         "tamanho_pizza":pizza.tamanho,
//         "preco_pizza":pizza.preco,
//         "data_criacao_pizza":pizza.data_criacao

//       }
//       return obj
//     })
//     res.status(200).json(resultado)
//   } catch (err) {
//     const mysqlErrorHandle = new MysqlErrorHandle(err, res)
// mysqlErrorHandle.validar()
//   }

// })


//TE AMO TERE, corri com carinho, estava funcionando, não funcionou mais.




interface IQuantidadePedido extends RowDataPacket{
    quantidade_pedidos:number
}

//1
// Crie uam rota chamada '/cliente_data_pedido' que retorne os clientes e data que os mesmos fizeram o pedido
//Para realizar isso, utilize o banco de dados chamado dbteremercado
app.get("/cliente_data_pedido", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT clientes.nome, pedidos.datapedido FROM dbteremercado.clientes INNER JOIN dbteremercado.pedidos ON clientes.idclientes = pedidos.clientes_idclientes`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})



//2
//Crie uma rota chamada '\pedidos_2026' que retorne idclientes, nome, idade, idpedidos, datapedido dos pedidos feitos no ano de 2026.

app.get("/pedidos_2026", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT clientes.idclientes, clientes.nome, clientes.idade, pedidos.idpedidos, pedidos.datapedido FROM dbteremercado.clientes 
        INNER JOIN dbteremercado.pedidos ON clientes.idclientes = pedidos.clientes_idclientes 
        WHERE datapedido BETWEEN '2026-01-01' AND '2026-12-31'`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})



//3 
//crie uma rota chamada '/quantidade_pedidos' que retorne um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados na tabela pedidos.
//USE O COMANDO COUNT(*) para contar as quantidades.


app.get("/quantidade_pedidos", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute<IQuantidadePedido[]>(`SELECT COUNT(*) AS quantidade_pedidos FROM pedidos`)
      const [quantidadePedidos] = [...resultado]
      console.log(quantidadePedidos)
    
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})


//4
//Crie uma rota chamada '/quantidade_pedidos_clientes' que retorne um json no formato '[{nome:"tere,quantidade_pedidos:1000"}]' que retorne todos os clientes e a quantidade 
//de pedidos que cada cliente fez.


app.get("/quantidade_pedidos_clientes", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT c.nome as nome, COUNT(*) AS quantidade_pedidos FROM clientes c
        INNER JOIN pedidos p ON c.idclientes = p.clientes_idclientes GROUP BY c.nome`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})

/**
 * 5) ROTA    /quantidade_produtos_por_cliente
 * Crie um código que retorne o nome do cliente e a quantidade de produtos que cada pedido tem
 *    formato    [{nome:"Nome Cliente",idpedido:1,quantidade_produtos:1000}]
 */

app.get("/quantidade_produtos_por_cliente", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute<IQuantidadePedido[]>(`SELECT clientes.nome AS nome, SUM(quantidade) AS quantidade_produto 
        FROM clientes  
        INNER JOIN pedidos 
         ON clientes.idclientes = pedidos.clientes_idclientes 
        INNER JOIN itenspedidos  
         ON pedidos.idpedidos = itenspedidos.pedidos_idpedidos 
         GROUP BY clientes.nome
        ;`)
      console.log(resultado)
    
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})

 /** 
 * 6)    /valor_pedido_total
 * Crie um código que retorne o nome do cliente e o valor total de cada pedido
 *    [{nome:"Nome Cliente",valor_total:1000}]
 */

app.get("/valor_pedido_total", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute<IQuantidadePedido[]>(`SELECT clientes.nome AS nome, SUM(quantidade) AS quantidade_produto 
        FROM clientes  
        INNER JOIN pedidos 
         ON clientes.idclientes = pedidos.clientes_idclientes 
        INNER JOIN itenspedidos  
         ON pedidos.idpedidos = itenspedidos.pedidos_idpedidos 
        INNER JOIN produtos 
        ON idprodutos = produtos_idprodutos
         GROUP BY clientes.nome
        ;`)
      console.log(resultado)
    
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})


//Criar servidor
app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000")
})