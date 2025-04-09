//importa o DataTypes do sequelize
import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Autor"
export default banco.define("autor", {
  id_autor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_autor: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  biografia: {
    type: DataTypes.TEXT,
  },
  nacionalidade: {
    type: DataTypes.STRING(50),
  },
  foto: {
    type: DataTypes.STRING(255),
  },
});
