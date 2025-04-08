import Editora from "../model/EditoraModel.js";

// Lista todos as editora
async function listar(req, res) {
  const respostabanco = await Editora.findAll();
  res.json(respostabanco);
}

// Busca editora por id
async function selecionar(req, res) {
  const id_editora = req.params.id_editora;
  const respostabanco = await Editora.findByPk(id_editora);
  res.json(respostabanco);
}

// Insere editora
async function inserir(req, res) {
  const { nome_editora, cnpj, endereco } = req.body;
  const respostabanco = await Editora.create({ nome_editora, cnpj, endereco });
  res.json(respostabanco);
}

// Atualiza editora por id
async function alterar(req, res) {
  const id_editora = req.params.id_editora;
  const { nome_editora, cnpj, endereco } = req.body;
  const respostabanco = await Editora.update(
    { nome_editora, cnpj, endereco },
    { where: { id_editora } }
  );
  res.json(respostabanco);
}

// Deleta editora por id
async function excluir(req, res) {
  const id_editora = req.params.id_editora;
  const respostabanco = await Editora.destroy({ where: { id_editora } });
  res.json(respostabanco);
}

export default { listar, selecionar, inserir, alterar, excluir };
