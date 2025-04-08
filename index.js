import express from "express";
import banco from "./banco.js";
import editora from "./controller/EditoraController.js";

// Verificar se a conexão com o banco de dados foi estabelecida com sucesso
try {
  await banco.authenticate();
  console.log("Conexão com o banco estabelecida com sucesso.");
} catch (error) {
  console.error("Não foi possível estabelecer uma conexão com o banco:", error);
}

// Utilização no app Express e app.use utiliza de corpo JSON
const app = express();
app.use(express.json());

// Teste de requisicao de rota
app.get("/teste", (req, res) => {
  res.send("Rota de teste acessada");
});

//Rotas CRUD tabela editora
//Busca todos os registros editora
app.get("/editora", editora.listar);

//Busca editora por parametro de id
app.get("/editora/:id_editora", editora.selecionar);

//Insere editora
app.post("/editora", editora.inserir);

//Atualiza editora por id
app.put("/editora/:id_editora", editora.alterar);

//Deleta editora por id
app.delete("/editora/:id_editora", editora.excluir);

// app conectada na porta 3000
app.listen(3000, () => {
  console.log(`Servidor está rodando na porta 3000`);
});
