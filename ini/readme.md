**Sistema de Gerenciamento de Clientes**

Este projeto consiste em um Sistema de Gerenciamento de Clientes para uma empresa de limpeza em residências. Ele foi desenvolvido utilizando Node.js para o backend, React para o frontend, e PostgreSQL como banco de dados. Além do gerenciamento básico de clientes (nome, email e telefone), o sistema também oferece uma funcionalidade para otimizar as rotas de atendimento, calculando a ordem mais eficiente de visitação aos clientes.

### Contexto do Projeto

#### Parte 1: Gerenciamento de Clientes

- O backend foi desenvolvido em Node.js e se comunica com o banco de dados PostgreSQL para realizar operações CRUD (Create, Read, Update, Delete) sobre os clientes.
- O frontend foi construído em React e permite listar os clientes, cadastrar novos clientes e visualizar as informações básicas de cada cliente.

#### Parte 2: Otimização de Rotas

- Além do cadastro e visualização de clientes, o sistema agora oferece a funcionalidade de calcular a rota mais eficiente para visitação dos clientes.
- Um mapa bidimensional representa a localização dos clientes com coordenadas X e Y.
- Um algoritmo de ordenação é utilizado para calcular a rota que minimiza a distância total percorrida.

### Como Executar o Projeto

**Requisitos:**
- Node.js e npm instalados.
- PostgreSQL instalado e configurado.

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sistema-gerenciamento-clientes.git
   cd sistema-gerenciamento-clientes
   ```

2. **Configurar o Banco de Dados:**
   - Certifique-se de ter um servidor PostgreSQL em execução.
   - Crie um banco de dados chamado `sistema_gerenciamento_clientes`.
   - Altere as credenciais do banco de dados no arquivo `db.js` conforme necessário.

3. **Instalar Dependências e Executar o Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Instalar Dependências e Executar o Frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

5. **Acessar o Aplicativo:**
   - O frontend estará disponível em [http://localhost:3000](http://localhost:3000).
   - O backend estará rodando em [http://localhost:3001](http://localhost:3001).
