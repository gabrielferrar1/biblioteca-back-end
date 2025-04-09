//importa o DataTypes do sequelize
import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Categoria"
export default banco.define("categoria", {
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_categoria: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
});
