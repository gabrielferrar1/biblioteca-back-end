//importa o DataTypes do sequelize
import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Emprestimo"
export default banco.define("emprestimo", {
  id_emprestimo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_livro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  emprestimo: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  vencimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  devolucao: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  observacao: {
    type: DataTypes.TEXT,
  },
});
