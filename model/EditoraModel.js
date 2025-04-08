//importa o DataTypes do sequelize
import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Editora"
export default banco.define("editora", {
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
