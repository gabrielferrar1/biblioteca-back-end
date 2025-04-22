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
  const observacao = req.body.observacao || null;

  // verifica se id_livro e id_usuario foram informados
  if (!id_livro) {
    return res
      .status(422)
      .json({ error: "O parâmetro id_livro é obrigatório." });
  }
  if (!id_usuario) {
    return res
      .status(422)
      .json({ error: "O paramêtro id_usuario é obrigatório." });
  }

  //verifica se o livro existe
  const livroBanco = await Livro.findByPk(id_livro);
  if (!livroBanco) {
    return res.status(404).json({ error: "Livro não encontrado." });
  }

  //verifica se o usuario existe
  const usuarioBanco = await Usuario.findByPk(id_usuario);
  if (!usuarioBanco) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  //verifica se o livro esta inativo
  if (!livroBanco.ativo) {
    return res.status(422).json({ error: "Livro inativo." });
  }

  //verifica se o livro ja esta emprestado
  if (livroBanco.emprestado === true) {
    return res.status(422).json({ error: "Livro já emprestado." });
  }

  //setando data de emprestimo e data de vencimento
  const emprestimo = moment().format("YYYY-MM-DD");
  const vencimento = moment().add(15, "days").format("YYYY-MM-DD");

  // inserindo o emprestimo no banco
  const respostabanco = await Emprestimo.create({
    id_livro,
    id_usuario,
    emprestimo,
    vencimento,
    observacao,
  });

  //alterando o status do campo emprestado para true
  const emprestado = true;
  await Livro.update({ emprestado }, { where: { id_livro } });

  res.status(201).json(respostabanco);
}

// devolver livro por id_emprestimo e id_livro
async function devolver(req, res) {
  const id_emprestimo = req.body.id_emprestimo;
  const id_livro = req.body.id_livro || null;

  // verifica se id_emprestimo e id_livro foram informado
  if (!id_emprestimo) {
    return res
      .status(422)
      .json({ error: "O parâmetro id_emprestimo é obrigatório." });
  }

  // verifica se o id_emprestimo existe no banco de dados
  const emprestimoBanco = await Emprestimo.findByPk(id_emprestimo);
  if (!emprestimoBanco) {
    return res.status(404).json({ error: "Empréstimo não encontrado." });
  }

  // verifica se o emprestimo já foi devolvido, caso sim retorna a mensagem caso o campo "devolucao" no banco de dados esteja null ele segue com a atualização do registro
  if (emprestimoBanco.devolucao !== null) {
    return res.status(422).json({ message: "O empréstimo já foi devolvido." });
  }

  const devolucao = moment().format("YYYY-MM-DD");
  const respostabanco = await Emprestimo.update(
    { devolucao },
    { where: { id_emprestimo } }
  );

  // alterando o status do campo emprestado na tabela livros para false
  const livro = emprestimoBanco.id_livro;
  const emprestado = false;
  await Livro.update({ emprestado }, { where: { id_livro: livro } });

  res.status(200).json(respostabanco);
}

export default { listar, selecionar, emprestar, devolver };
