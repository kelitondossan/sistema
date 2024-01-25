import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rota, setRota] = useState([]);

  const handleSubmit = () => {
    axios.post('http://localhost:3001/clientes', { nome, email, telefone })
      .then(response => setClientes([...clientes, response.data]))
      .catch(error => console.error(error));
  };

  const calcularRota = () => {
    axios.get('http://localhost:3001/calcular-rota')
      .then(response => setRota(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='container'>
      <h1 className='header'>Lista de Clientes</h1>
      <ul className='client-list '>
        {clientes.map(cliente => (
          <li className='client-item' key={cliente.id}>{cliente.nome} - {cliente.email} - {cliente.telefone}</li>
        ))}
      </ul>

      <h2 className='form-container'>Cadastrar Novo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label className='form-container label'>Nome:
          <input className='form-container input' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label >
        <label className='form-container label'> Email:
          <input className='form-container input' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='form-container label'>Telefone:
          <input className='form-container input' type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <button className='form-container button' type="submit">Cadastrar</button>
      </form>

      <h2>Calcular Rota</h2>
      <button className='route-button ' onClick={calcularRota}>Calcular Rota</button>
      {rota.length > 0 && (
        <div>
          <h3>Ordem de Visitação</h3>
          <ul className='route-list'>
            {rota.map(cliente => (
              <li className='route-item' key={cliente.id}>{cliente.nome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
