import express from "express";

const app = express();
app.use(express.json());

app.get("/teste", (req, res) => {
  res.send("Rota de teste acessada");
});

app.listen(3000, () => {
  console.log(`Servidor está rodando na porta 3000`);
});
