//importa o DataTypes do sequelize
import { DataTypes } from "sequelize";
import banco from "../banco.js";

// Model para a tabela "Livro"
export default banco.define("livro", {
  id_livro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    constraint: "pk_livro",
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  edicao: {
    type: DataTypes.STRING(40),
    defaultValue: "Não definida",
  },
  paginas: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  publicacao: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  foto: {
    type: DataTypes.TEXT,
  },
  localizacao: {
    type: DataTypes.TEXT,
  },
  resumo: {
    type: DataTypes.TEXT,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  condicao_fisica: {
    type: DataTypes.TEXT,
  },
  emprestado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  id_editora: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "editora",
      key: "id_editora",
    },
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "categoria",
      key: "id_categoria",
    },
  },
});
