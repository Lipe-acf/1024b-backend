import mysql from 'mysql2/promise';

import express from 'express'
const app = express()
app.use(express.json())
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'aula1',
});

app.get("/pessoa", async (req, res)=>{
  try { 

  const nome = "Algum nome"
  const [resultado, campos] 
      = await connection.execute(`SELECT * FROM pessoa`)
 console.log(resultado)
 res.status(200).json(resultado)
} catch (err) {
  console.log(err);
  res.status(500).json({mensagem:"Erro no servidor!"})
}

}) //listar
app.post("/pessoa", async (req, res)=>{
  try { 
  // "execute" irá chamar internamente a preparação e a consulta (query)
  // const preparacao = await connection.prepare("select * from pessoa");
  const {id, nome} = req.body
//Valide se o id e o nome foram passados corretamente. (Algum valor)
//Se não foram, retone o código 400 com a mensagem "id ou nome inválidos"
//Não deixe o código executar a parte de baixo quando for inválido.

if (id != null && nome != "") {
  res.status(400).json({mensagem:"Id ou nome diferente de 0"})
} 

  const [resultado, campos] 
      = await connection.execute(`insert into pessoa value (?,?)`,[id,nome])
  res.status(201).json({mesagem:"Sucesso"})
  console.log(resultado)
} catch (err) {
  console.log(err);
  res.status(500).json({mensagem:"Erro no servidor!"})
}
}) //inserir

//Criar servidor
app.listen(8000,()=>{
  console.log("Servidor iniciado na porta 8000")
})



/*
// Cria a conexão com o Banco de Dados
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'aula1',
});
try { 
  // "execute" irá chamar internamente a preparação e a consulta (query)
  // const preparacao = await connection.prepare("select * from pessoa");
  const id = 7
  const nome = "Algum nome"
  const [resultado, campos] 
      = await connection.execute(`insert into pessoa value (?,?)`,[id,nome])
  console.log(resultado)
  await connection.end();
} catch (err) {
  console.log(err);
}
*/