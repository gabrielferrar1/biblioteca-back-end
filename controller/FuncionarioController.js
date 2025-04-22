import Funcionario from "../model/FuncionarioModel.js";

//lista todos os funcionarios
async function listar(req, res) {
  const respostabanco = await Funcionario.findAll();
  res.json(respostabanco);
}

//busca funcionario por id
async function selecionar(req, res) {
  const id_funcionario = req.params.id_funcionario;
  const respostabanco = await Funcionario.findByPk(id_funcionario);
  res.json(respostabanco);
}

//insere funcionario
async function inserir(req, res) {
  const {
    nome_funcionario,
    cpf,
    email,
    telefone,
    data_nascimento,
    salario,
    contratacao,
  } = req.body;

  //valida se o nome_funcionario foi informado
  if (!nome_funcionario) {
    return res
      .status(422)
      .json({ error: "O parâmetro nome_funcionario é obrigatório." });
  }

  //valida se o email foi informado
  if (!email) {
    return res.status(422).json({ error: "O parâmetro email é obrigatório." });
  }

  //valida se o salario foi informado
  if (!salario) {
    return res
      .status(422)
      .json({ error: "O parâmetro salario é obrigatório." });
  }

  //valida se a data de contratacao foi informada
  if (!contratacao) {
    return res
      .status(422)
      .json({ error: "O parâmetro contratacao é obrigatório." });
  }

  const respostabanco = await Funcionario.create({
    nome_funcionario,
    cpf,
    email,
    telefone,
    data_nascimento,
    salario,
    contratacao,
  });

  res.status(201).json(respostabanco);
}

//atualiza registros funcionario
async function alterar(req, res) {
  const {
    id_funcionario,
    nome_funcionario,
    cpf,
    email,
    telefone,
    data_nascimento,
    salario,
    contratacao,
  } = req.body;

  //valida se o nome_funcionario foi informado
  if (!nome_funcionario) {
    return res
      .status(422)
      .json({ error: "O parâmetro nome_funcionario é obrigatório." });
  }

  //valida se o email foi informado
  if (!email) {
    return res.status(422).json({ error: "O parâmetro email é obrigatório." });
  }

  //valida se o salario foi informado
  if (!salario) {
    return res
      .status(422)
      .json({ error: "O parâmetro salario é obrigatório." });
  }

  //valida se a data de contratacao foi informada
  if (!contratacao) {
    return res
      .status(422)
      .json({ error: "O parâmetro contratacao é obrigatório." });
  }

  const respostabanco = await Funcionario.update(
    {
      nome_funcionario,
      cpf,
      email,
      telefone,
      data_nascimento,
      salario,
      contratacao,
    },
    { where: { id_funcionario } }
  );
  res.status(201).json(respostabanco);
}

export default { listar, selecionar, inserir, alterar };
