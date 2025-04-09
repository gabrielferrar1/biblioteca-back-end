import Autor from "../model/AutorModel.js";

// Lista todos os autores
async function listar(req, res) {
  const respostabanco = await Autor.findAll();
  res.json(respostabanco);
}

// Busca autor por id
async function selecionar(req, res) {
  const id_autor = req.params.id_autor;
  const respostabanco = await Autor.findByPk(id_autor);
  res.json(respostabanco);
}

// Insere autor
async function inserir(req, res) {
  const { nome_autor } = req.body;
  const { data_nascimento } = req.body;
  const { biografia } = req.body;
  const { nacionalidade } = req.body;
  const { foto } = req.body;
  const respostabanco = await Autor.create({
    nome_autor,
    data_nascimento,
    biografia,
    nacionalidade,
    foto,
  });
  res.json(respostabanco);
}

// Atualiza autor por id
async function alterar(req, res) {
  const id_autor = req.params.id_autor;
  const { nome_autor } = req.body;
  const { data_nascimento } = req.body;
  const { biografia } = req.body;
  const { nacionalidade } = req.body;
  const { foto } = req.body;
  const respostabanco = await Autor.update(
    { nome_autor, data_nascimento, biografia, nacionalidade, foto },
    { where: { id_autor } }
  );
  res.json(respostabanco);
}

// Deleta autor por id
async function excluir(req, res) {
  const id_autor = req.params.id_autor;
  const respostabanco = await Autor.destroy({ where: { id_autor } });
  res.json(respostabanco);
}

export default { listar, selecionar, inserir, alterar, excluir };
