const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, "dist")));

// rota fallback → qualquer rota que não seja API cai no index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
