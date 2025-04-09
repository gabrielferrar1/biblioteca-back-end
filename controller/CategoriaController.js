import Categoria from "../model/CategoriaModel.js";

// Lista todos as categoria
async function listar(req, res) {
  const respostabanco = await Categoria.findAll();
  res.json(respostabanco);
}

// Busca categoria por id
async function selecionar(req, res) {
  const id_categoria = req.params.id_categoria;
  const respostabanco = await Categoria.findByPk(id_categoria);
  res.json(respostabanco);
}

// Insere categoria
async function inserir(req, res) {
  const { nome_categoria } = req.body;
  const respostabanco = await Categoria.create({ nome_categoria });
  res.json(respostabanco);
}

// Atualiza categoria por id
async function alterar(req, res) {
  const id_categoria = req.params.id_categoria;
  const { nome_categoria } = req.body;
  const respostabanco = await Categoria.update(
    { nome_categoria },
    { where: { id_categoria } }
  );
  res.json(respostabanco);
}

// Deleta categoria por id
async function excluir(req, res) {
  const id_categoria = req.params.id_categoria;
  const respostabanco = await Categoria.destroy({ where: { id_categoria } });
  res.json(respostabanco);
}

export default { listar, selecionar, inserir, alterar, excluir };
