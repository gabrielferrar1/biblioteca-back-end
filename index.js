import express from "express";
import { Sequelize, DataTypes } from "sequelize";

// Configuração do Sequelize para conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize("postgres", "postgres", "Djg@0702", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

// Model para a tabela "Editora"
const Editora = sequelize.define("editora", {
  id_editora: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_editora: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  endereco: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Verificar se a conexão com o banco de dados foi estabelecida com sucesso
try {
  await sequelize.authenticate();
  console.log("Conexão com o banco estabelecida com sucesso.");
} catch (error) {
  console.error("Não foi possível estabelecer uma conexão com o banco:", error);
}

// Utilização no app Express e app.use utiliza de corpo JSON
const app = express();
app.use(express.json());

// Teste de requisicao de rota
app.get("/teste", (req, res) => {
  res.send("Rota de teste acessada");
});

//Rotas CRUD tabela editora
//Busca todos os registros editora
app.get("/editora", async (req, res) => {
  const respostabanco = await Editora.findAll();
  res.json(respostabanco);
});

//Busca editora por parametro de id
app.get("/editora/:id_editora", async (req, res) => {
  const id_editora = req.params.id_editora;
  const respostabanco = await Editora.findByPk(id_editora);
  res.json(respostabanco);
});

//Insere editora
app.post("/editora", async (req, res) => {
  const { nome_editora, cnpj, endereco } = req.body;
  const respostabanco = await Editora.create({ nome_editora, cnpj, endereco });
  res.json(respostabanco);
});

//Atualiza editora por id
app.put("/editora/:id_editora", async (req, res) => {
  const id_editora = req.params.id_editora;
  const { nome_editora, cnpj, endereco } = req.body;
  const respostabanco = await Editora.update(
    { nome_editora, cnpj, endereco },
    { where: { id_editora } }
  );
  res.json(respostabanco);
});

//Deleta editora por id
app.delete("/editora/:id_editora", async (req, res) => {
  const id_editora = req.params.id_editora;
  const respostabanco = await Editora.destroy({ where: { id_editora } });
  res.json(respostabanco);
});

// app conectada na porta 3000
app.listen(3000, () => {
  console.log(`Servidor está rodando na porta 3000`);
});
