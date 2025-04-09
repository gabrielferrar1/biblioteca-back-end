import Livro from "../model/LivroModel.js";

//Lista todos os livros
async function listar(req, res) {
  const respostabanco = await Livro.findAll();
  res.json(respostabanco);
}

//Busca livro por id
async function selecionar(req, res) {
  const id_livro = req.params.id_livro;
  const respostabanco = await Livro.findByPk(id_livro);
  res.json(respostabanco);
}

//Insere livro
async function inserir(req, res) {
  const {
    titulo,
    edicao,
    paginas,
    publicacao,
    foto,
    localizacao,
    resumo,
    ativo,
    condicao_fisica,
    emprestado,
    id_editora,
    id_categoria,
  } = req.body;
  const respostabanco = await Livro.create({
    titulo,
    edicao,
    paginas,
    publicacao,
    foto,
    localizacao,
    resumo,
    ativo,
    condicao_fisica,
    emprestado,
    id_editora,
    id_categoria,
  });
  res.json(respostabanco);
}

//Atualiza livro por id
async function alterar(req, res) {
  const id_livro = req.params.id_livro;
  const {
    titulo,
    edicao,
    paginas,
    publicacao,
    foto,
    localizacao,
    resumo,
    ativo,
    condicao_fisica,
    emprestado,
    id_editora,
    id_categoria,
  } = req.body;
  const respostabanco = await Livro.update(
    {
      titulo,
      edicao,
      paginas,
      publicacao,
      foto,
      localizacao,
      resumo,
      ativo,
      condicao_fisica,
      emprestado,
      id_editora,
      id_categoria,
    },
    { where: { id_livro } }
  );
  res.json(respostabanco);
}

//Deleta livro por id
async function excluir(req, res) {
  const id_livro = req.params.id_livro;
  const respostabanco = await Livro.destroy({ where: { id_livro } });
  res.json(respostabanco);
}

export default { listar, selecionar, inserir, alterar, excluir };
