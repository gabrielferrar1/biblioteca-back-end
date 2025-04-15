import Usuario from "../model/UsuarioModel.js";

//Lista todos os usuarios
async function listar(req, res) {
  const respostabanco = await Usuario.findAll();
  res.json(respostabanco);
}

//Busca usuario por id
async function selecionar(req, res) {
  const id_usuario = req.params.id_usuario;
  const respostabanco = await Usuario.findByPk(id_usuario);
  res.json(respostabanco);
}

//Insere usuario
async function inserir(req, res) {
  const { nome, cpf, data_nascimento, email, telefone, senha } = req.body;
  const respostabanco = await Usuario.create({
    nome,
    cpf,
    data_nascimento,
    email,
    telefone,
    senha,
  });
  res.json(respostabanco);
}

//Atualiza usuario por id
async function alterar(req, res) {
  const id_usuario = req.params.id_usuario;
  const { nome, cpf, data_nascimento, email, telefone, senha } = req.body;
  const respostabanco = await Usuario.update(
    {
      nome,
      cpf,
      data_nascimento,
      email,
      telefone,
      senha,
    },
    { where: { id_usuario } }
  );
  res.json(respostabanco);
}

//Deleta usuario por id
async function excluir(req, res) {
  const id_usuario = req.params.id_usuario;
  const respostabanco = await Usuario.destroy({ where: { id_usuario } });
  res.json(respostabanco);
}

export default { listar, selecionar, inserir, alterar, excluir };
