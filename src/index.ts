import mysql from 'mysql2/promise';

try {
  // Cria a conexão com o Banco de Dados
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
  });

  // "execute" irá chamar internamente a preparação e a consulta (query)
  // const preparacao = await connection.prepare("select * from pessoa");
  const id = 5
  const nome = "Marcos'); drop database aula1;('"
  const preparacao = await connection.prepare(`insert into pessoa (id, nome) value (?,?)`);
  const [resultado, campos] = await preparacao.execute([id,nome])
  console.log(resultado)
  await connection.end();
} catch (err) {
  console.log(err);
}