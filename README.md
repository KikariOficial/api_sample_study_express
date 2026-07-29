# 🛠️ Tech-Inventory OS (API)

Sistema de Gestão de Inventário e Manutenção de Equipamentos. Esta é a API backend responsável por gerenciar componentes eletrônicos, sensores industriais e equipamentos de TI, fornecendo dados para o painel de controle frontend.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

*   **Node.js** - Ambiente de execução JavaScript.
*   **TypeScript** - Superset que adiciona tipagem estática ao JavaScript.
*   **Express** - Framework web minimalista e flexível.
*   **MongoDB** - Banco de dados NoSQL focado em documentos.
*   **Mongoose** - Modelagem de dados (ODM) para MongoDB.

## 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
*   [Node.js](https://nodejs.org/en/) (Versão 18 ou superior recomendada)
*   [MongoDB](https://www.mongodb.com/) (Local ou uma conta no MongoDB Atlas)
*   Git

## ⚙️ Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/tech-inventory-api.git](https://github.com/seu-usuario/tech-inventory-api.git)

2. Instale as dependências:
   ```bash
   npm install
  
4. Crie um arquivo .env na raiz do projeto baseado no arquivo de exemplo e adicione sua string de conexão do MongoDB:
    PORT=3333
    MONGO_URI=mongodb://localhost:27017/tech_inventory

5. Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run dev

O servidor iniciará na porta 3333 e exibirá uma mensagem confirmando a conexão com o banco de dados.

## 📂 Estrutura do Projeto

src/

├── config/        # Configurações externas (Banco de Dados)

├── controllers/   # Regras de fluxo HTTP e processamento de requisições

├── models/        # Schemas e Interfaces do Mongoose

├── routes/        # Mapeamento de endpoints da API

├── app.ts         # Configuração central do Express

└── server.ts      # Arquivo de inicialização do servidor

## 📡 Endpoints da API (Equipamentos)

URL Base: http://localhost:3333/api

Método  |  Rota  |  Descrição


GET | /health | Verifica o status da API.

POST | /equipments | Cadastra um novo equipamento.

GET | /equipments | Lista todos os equipamentos cadastrados.

GET | /equipments/:id | Busca os detalhes de um equipamento específico pelo seu ID.

## Exemplo de Payload para Criação (POST)

{
  "name": "Módulo Sensor de Gás MQ",
  "category": "Sensor",
  "status": "Ativo",
  "location": "Bancada Indústria 4.0",
  "technicalSpecs": {
    "pinout": ["GND", "AD", "DO", "VCC"],
    "operatingVoltage": "5V"
  }
}
