import { DataTypes } from "sequelize";
import banco from "../banco.js";

//Model para a tabela "lvro_autor"
export default banco.define(
  "livroAutor",
  {
    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "livro",
        key: "id_livro",
      },
    },
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "autor",
        key: "id_autor",
      },
    },
  },
  {
    tableName: "livro_autor",
    timestamps: false,
  }
);
