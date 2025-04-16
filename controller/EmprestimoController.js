import Emprestimo from "../model/EmprestimoModel.js";
import Livro from "../model/LivroModel.js";
import Usuario from "../model/UsuarioModel.js";
import moment from "moment";

// Lista todos os emprestimos
async function listar(req, res) {
  const respostabanco = await Emprestimo.findAll();
  res.json(respostabanco);
}

// Busca autor por id_emprestimo
async function selecionar(req, res) {
  const id_emprestimo = req.params.id_emprestimo;
  const respostabanco = await Emprestimo.findByPk(id_emprestimo);
  res.json(respostabanco);
}

// Insere emprestimo
async function emprestar(req, res) {
  const id_livro = req.body.id_livro;
  const id_usuario = req.body.id_usuario;

  //verificar se o livro e o usuario existem
  if (!id_livro) {
    return res.status(422).send("O parâmetro id_livro é obrigatório.");
  }

  if (!id_usuario) {
    return res
      .status(422)
      .json({ error: "O paramêtro id_usuario é obrigatório." });
  }

  //verifica se o livro existe
  const livroBanco = await Livro.findByPk(id_livro);
  if (!livroBanco) {
    return res.status(404).send("Livro não encontrado.");
  }

  const usuarioBanco = await Usuario.findByPk(id_usuario);
  if (!usuarioBanco) {
    return res.status(404).send("Usuário não encontrado.");
  }

  //verifica se o livro esta inativo
  if (!livroBanco.ativo) {
    return res.status(422).send("Livro inativo.");
  }

  //verifica se o livro ja esta emprestado
  if (livroBanco.emprestado === true) {
    return res.status(422).send("Livro já emprestado.");
  }

  //setando data de emprestimo e data de vencimento
  const emprestimo = moment().format("YYYY-MM-DD");
  const vencimento = moment().add(15, "days").format("YYYY-MM-DD");

  // inserindo o emprestimo no banco
  const respostaBanco = await Emprestimo.create({
    id_livro,
    id_usuario,
    emprestimo,
    vencimento,
  });

  //alterando o status do campo emprestado para true
  const emprestado = true;
  await Livro.update({ emprestado }, { where: { id_livro } });
  res.json(respostaBanco);
}

// Atualiza emprestimo por id
async function devolver(req, res) {
  const id_autor = req.params.id_autor;
  const { nome_autor, data_nascimento, biografia, nacionalidade, foto } =
    req.body;
  const respostabanco = await Emprestimo.update(
    { nome_autor, data_nascimento, biografia, nacionalidade, foto },
    { where: { id_autor } }
  );
  res.json(respostabanco);
}

export default { listar, selecionar, emprestar, devolver };
