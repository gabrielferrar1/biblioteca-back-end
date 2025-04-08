import { Sequelize } from "sequelize";

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

export default sequelize;
