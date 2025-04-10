import express from "express";
import banco from "./banco.js";
import editora from "./controller/EditoraController.js";
import categoria from "./controller/CategoriaController.js";
import autor from "./controller/AutorController.js";
import livro from "./controller/LivroController.js";

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
app.get("/editora", editora.listar);
app.get("/editora/:id_editora", editora.selecionar);
app.post("/editora", editora.inserir);
app.put("/editora/:id_editora", editora.alterar);
app.delete("/editora/:id_editora", editora.excluir);

//Rotas CRUD tabela categoria
app.get("/categoria", categoria.listar);
app.get("/categoria/:id_categoria", categoria.selecionar);
app.post("/categoria", categoria.inserir);
app.put("/categoria/:id_categoria", categoria.alterar);
app.delete("/categoria/:id_categoria", categoria.excluir);

//Rotas CRUD tabela autor
app.get("/autor", autor.listar);
app.get("/autor/:id_autor", autor.selecionar);
app.post("/autor", autor.inserir);
app.put("/autor/:id_autor", autor.alterar);
app.delete("/autor/:id_autor", autor.excluir);

//Rotas CRUD tabela livro
app.get("/livro", livro.listar);
app.get("/livro/:id_livro", livro.selecionar);
app.post("/livro", livro.inserir);
app.put("/livro/:id_livro", livro.alterar);
app.delete("/livro/:id_livro", livro.excluir);

// app conectada na porta 3000
app.listen(3000, () => {
  console.log(`Servidor está rodando na porta 3000`);
});
