import LivroAutor from "../model/LivroAutorModel.js";

//Lista todos os LivrosAutores
async function listar(req, res) {
  const respostabanco = await LivroAutor.findAll();
  res.json(respostabanco);
}

//Busca LivroAutor por id
async function selecionarLivro(req, res) {
  const id_livro = req.params.id_livro;
  const respostabanco = await LivroAutor.findAll({
    where: { id_livro: id_livro },
  });
  res.json(respostabanco);
}

//Busca LivroAutor por id
async function selecionarAutor(req, res) {
  const id_autor = req.params.id_autor;
  const respostabanco = await LivroAutor.findAll({
    where: { id_autor: id_autor },
  });
  res.json(respostabanco);
}

//Insere livro
async function inserir(req, res) {
  const { id_livro, id_autor } = req.body;
  const respostabanco = await LivroAutor.create({
    id_livro,
    id_autor,
  });
  res.json(respostabanco);
}

//Deleta livro por id
async function excluir(req, res) {
  const id_livro = req.params.id_livro;
  const id_autor = req.params.id_autor;
  const respostabanco = await LivroAutor.destroy({
    where: { id_livro, id_autor },
  });
  res.json(respostabanco);
}

export default { listar, selecionarLivro, selecionarAutor, inserir, excluir };
