// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rotas para clientes
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no servidor');
  }
});

app.post('/clientes', async (req, res) => {
  const { nome, email, telefone, coordenadaX, coordenadaY } = req.body;
  try {
    const result = await pool.query('INSERT INTO clientes (nome, email, telefone, coordenadaX, coordenadaY) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nome, email, telefone, coordenadaX, coordenadaY]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no servidor');
  }
});

app.get('/calcular-rota', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM clientes ORDER BY coordenadaX, coordenadaY');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro no servidor');
    }
  });

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
