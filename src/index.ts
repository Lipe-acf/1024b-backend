import mysql from 'mysql2/promise';

import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js';
import  connection from './mysql_connection.js';
const app = express()
app.use(express.json())





// app.get("/pessoa", async (req, res) => {
//   try {

//     const nome = "Algum nome"
//     const [resultado, campos]
//       = await connection.execute(`SELECT * FROM pessoa`)
//     console.log(resultado)
//     res.status(200).json(resultado)
//   } catch (err) {
//     const mysqlErrorHandle = new MysqlErrorHandle(err, res)
// mysqlErrorHandle.validar()
//   }

// }) //listar
// app.post("/pessoa", async (req, res) => {
//   try {
//     // "execute" irá chamar internamente a preparação e a consulta (query)
//     // const preparacao = await connection.prepare("select * from pessoa");
//     const { id, nome } = req.body
//     //Valide se o id e o nome foram passados corretamente. (Algum valor)
//     //Se não foram, retone o código 400 com a mensagem "id ou nome inválidos"
//     //Não deixe o código executar a parte de baixo quando for inválido.

//     if (id != null && nome != "") {
//       res.status(400).json({ mensagem: "Id ou nome diferente de 0" })
//     }

//     const [resultado, campos]
//       = await connection.execute(`insert into pessoa value (?,?)`, [id, nome])
//     res.status(201).json({ mesagem: "Sucesso" })
//     console.log(resultado)
//   } catch (err) {
//    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
// mysqlErrorHandle.validar()
//   }
// }) //inserir



app.get("/listar_produtos", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT * FROM produto`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})

app.post("/cadastro_produto", async (req, res) => {
  try {
    // "execute" irá chamar internamente a preparação e a consulta (query)
    // const preparacao = await connection.prepare("select * from pessoa");
    const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body
    //Valide se o id e o nome foram passados corretamente. (Algum valor)
    //Se não foram, retone o código 400 com a mensagem "id ou nome inválidos"
    //Não deixe o código executar a parte de baixo quando for inválido.

    if (id == null || nome == "") {
  return res.status(400).json({ mensagem: "Id ou nome inválidos" })
}

    const [resultado, campos]
      = await connection.execute(`insert into produto value (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao ])
    res.status(201).json({ mesagem: "Sucesso" })
    console.log(resultado)
  } catch (err) {0
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()

  }
}) 
//Criar servidor
app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000")
})






app.get("/listar_produtos_informatica", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT * FROM produto WHERE categoria = "eletrônico"`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})



app.get("/listar_produtos_caros", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT * FROM produto WHERE preco >= 100`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    const mysqlErrorHandle = new MysqlErrorHandle(err, res)
mysqlErrorHandle.validar()
  }

})
