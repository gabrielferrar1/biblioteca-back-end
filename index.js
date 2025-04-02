import express from "express";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "Djg@0702", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

try {
  await sequelize.authenticate();
  console.log("Conexão com o banco estabelecida com sucesso.");
} catch (error) {
  console.error("Não foi possível estabelecer uma conexão com o banco:", error);
}

const app = express();
app.use(express.json());

app.get("/teste", (req, res) => {
  res.send("Rota de teste acessada");
});

app.listen(3000, () => {
  console.log(`Servidor está rodando na porta 3000`);
});
