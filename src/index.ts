import mysql from 'mysql2/promise';

import express from 'express'
const app = express()
app.use(express.json())
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'aula1',
});

// app.get("/pessoa", async (req, res) => {
//   try {

//     const nome = "Algum nome"
//     const [resultado, campos]
//       = await connection.execute(`SELECT * FROM pessoa`)
//     console.log(resultado)
//     res.status(200).json(resultado)
//   } catch (err) {
//     console.log(err);

//     if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
//       res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
//     }
//     else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
//       res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
//     } else {


//       res.status(500).json({ mensagem: "Erro no servidor!" })
//     }
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
//     console.log(err);

//     if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
//       res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
//     }
//     else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
//       res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
//     } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
//       res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
//     } else {


//       res.status(500).json({ mensagem: "Erro no servidor!" })
//     }
//   }
// }) //inserir



app.get("/listar_produtos", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT * FROM produto`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    console.log(err);

    if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
      res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
    }
    else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
      res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
      res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
    } else {


      res.status(500).json({ mensagem: "Erro no servidor!" })
    }
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
    console.log(err);

    if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
      res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
    }
    else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
      res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
      res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
    } else {


      res.status(500).json({ mensagem: "Erro no servidor!" })
    }
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
    console.log(err);

    if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
      res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
    }
    else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
      res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
      res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
    } else {


      res.status(500).json({ mensagem: "Erro no servidor!" })
    }
  }

})



app.get("/listar_produtos_caros", async (req, res) => {
  try {

    
    const [resultado, campos]
      = await connection.execute(`SELECT * FROM produto WHERE preco >= 100`)
    console.log(resultado)
    res.status(200).json(resultado)
  } catch (err) {
    console.log(err);

    if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
      res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!!!" })
    }
    else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
      res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o seu USER e Senha de Conexão!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
      res.status(500).json({ mensagem: "Erro: Confira o nome de sua tabela ou crie a tabela!" })
    } else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
      res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
    } else {


      res.status(500).json({ mensagem: "Erro no servidor!" })
    }
  }

})
