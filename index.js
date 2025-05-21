import express from "express";
import banco from "./banco.js";
import editora from "./controller/EditoraController.js";
import categoria from "./controller/CategoriaController.js";
import autor from "./controller/AutorController.js";
import livro from "./controller/LivroController.js";
import livroAutor from "./controller/LivroAutorController.js";
import usuario from "./controller/UsuarioController.js";
import emprestimo from "./controller/EmprestimoController.js";
import funcionario from "./controller/FuncionarioController.js";
import cors from "cors";

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
app.use(cors());

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

//Rotas CRUD tabela livro_autor
app.get("/livroAutor", livroAutor.listar);
app.get("/livroAutor/livro/:id_livro", livroAutor.selecionarLivro);
app.get("/livroAutor/autor/:id_autor", livroAutor.selecionarAutor);
app.post("/livroAutor", livroAutor.inserir);
app.delete("/livroAutor/:id_livro/:id_autor", livroAutor.excluir);

//Rotas CRUD tabela usuario
app.get("/usuario", usuario.listar);
app.get("/usuario/:id_usuario", usuario.selecionar);
app.post("/usuario", usuario.inserir);
app.put("/usuario/:id_usuario", usuario.alterar);
app.delete("/usuario/:id_usuario", usuario.excluir);

//Rotas tabela emprestimo, consulta de livros disponíveis para emprestimo e emprestimos com devolucao pendente
app.get("/emprestimo", emprestimo.listar);
app.get("/emprestimo/:id_emprestimo", emprestimo.selecionar);
app.post("/emprestar", emprestimo.emprestar);
app.put("/devolver", emprestimo.devolver);
app.get("/consultarLivrosDisponiveis", emprestimo.consultarLivrosDisponiveis);
app.get(
  "/consultarEmprestimosPendentes",
  emprestimo.consultarEmprestimosPendentes
);

//Rotas CRUD tabela funcionario
app.get("/funcionario", funcionario.listar);
app.get("/funcionario/:id_funcionario", funcionario.selecionar);
app.post("/funcionario", funcionario.inserir);
app.put("/funcionario", funcionario.alterar);
app.put("/funcionarioDemitir", funcionario.demitirFuncionario);
app.put("/funcionarioDefinirSenha", funcionario.definirSenha);

// app conectada na porta 3000
app.listen(4000, () => {
  console.log(`Servidor está rodando na porta 4000`);
});
