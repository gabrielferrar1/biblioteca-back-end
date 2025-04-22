import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Usuario"
export default banco.define("funcionario", {
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_funcionario: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(15),
    allowNull: true,
    unique: true,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  salario: {
    type: DataTypes.DECIMAL(11, 2),
    allowNull: false,
    defaultValue: 0,
  },
  contratacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  demissao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
