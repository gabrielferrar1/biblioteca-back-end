import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Usuario"
export default banco.define("usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
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
    allowNull: false,
  },
});
