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

//demitir funcionario
async function demitirFuncionario(req, res) {
  const { id_funcionario, data_demissao } = req.body;

  //valida se o id_funcionario foi informado
  if (!id_funcionario) {
    return res
      .status(422)
      .json({ error: "O parâmetro id_funcionario é obrigatório." });
  }

  //validar se o funcionario existe
  const funcionarioBanco = await Funcionario.findByPk(id_funcionario);
  if (!funcionarioBanco) {
    return res.status(404).json({ error: "Funcionário não encontrado." });
  }

  //valida se a data de demissao foi informada
  if (!data_demissao) {
    return res
      .status(422)
      .json({ error: "O parâmetro data_demissao é obrigatório." });
  }

  //verifica se o funcionario ja foi demitido
  if (funcionarioBanco.demissao !== null) {
    return res.status(422).json({ message: "O funcionário já foi demitido." });
  }

  const respostabanco = await Funcionario.update(
    { demissao: data_demissao, ativo: false },
    { where: { id_funcionario } }
  );

  res.status(201).json(respostabanco);
}

// definir senha para o funcionario
async function definirSenha(req, res) {
  const { id_funcionario, senha } = req.body;

  //valida se o id_funcionario foi informado
  if (!id_funcionario) {
    return res
      .status(422)
      .json({ error: "O parâmetro id_funcionario é obrigatório." });
  }

  //validar se o funcionario existe
  const funcionarioBanco = await Funcionario.findByPk(id_funcionario);
  if (!funcionarioBanco) {
    return res.status(404).json({ error: "Funcionário não encontrado." });
  }

  //valida se a senha foi informada
  if (!senha) {
    return res.status(422).json({ error: "O parâmetro senha é obrigatório." });
  }

  //valida se a senha tem no minimo 6 digitos e no máximo 20 digitos
  if (senha.length < 6 || senha.length > 20) {
    return res.status(422).json({
      message: "A senha deve ter entre 6 e 20 caracteres.",
    });
  }

  const respostabanco = await Funcionario.update(
    { senha, token: null },
    { where: { id_funcionario } }
  );

  res.status(201).json(respostabanco);
}

export default {
  listar,
  selecionar,
  inserir,
  alterar,
  demitirFuncionario,
  definirSenha,
};
