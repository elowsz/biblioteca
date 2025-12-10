# 📚 API Biblioteca – CRUD de Livros  

Projeto desenvolvido para a disciplina **Arquitetura e Desenvolvimento Back-end**, com o objetivo de criar uma API Web utilizando **Node.js + Express + TypeORM**, implementando CRUD completo da entidade **Livro**.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **TypeScript**
- **TypeORM**
- **SQLite**
- **REST Client**

---

## 🏗️ Arquitetura do Projeto

src/
controller/ → Regras de negócio e rotas
entity/ → Entidade Livro
repository/ → Manipulação do banco via TypeORM
data-source.ts → Conexão com o banco SQLite
index.ts → Inicialização do servidor

## 📖 Entidade: Livro

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | number | Identificador único |
| `titulo` | string | Título do livro |
| `autor` | string | Autor principal |
| `isbn` | string | Código ISBN |
| `anoPublicacao` | number | Ano de publicação |
| `disponivel` | boolean | Status |

## 🔗 Endpoints da API

### 📌 Criar livro (POST)
`/api/livros`

```json
{
  "titulo": "Exemplo",
  "autor": "Fulano",
  "isbn": "123456789",
  "anoPublicacao": 2020,
  "disponivel": true
}

📌 Listar todos (GET)

/api/livros

📌 Buscar por ID (GET)

/api/livros/{id}

📌 Atualizar (PUT)

/api/livros/{id}

📌 Deletar (DELETE)

/api/livros/{id}

▶️ Como Rodar o Projeto

1️⃣ Instalar dependências
npm install

2️⃣ Rodar o servidor
npm run dev


Saída esperada:

Banco conectado!
Servidor rodando na porta 3000

🧪 Testando com REST Client

O arquivo test.http possui todas as requisições prontas.
Basta clicar em Send Request.

👩‍💻 Desenvolvido por

Eloisa Andrade
Disciplina: Arquitetura e Desenvolvimento Back-end
Professor: Danilo Farias

LinkedIn: https://linkedin.com/in/elowsz

GitHub: https://github.com/elowsz
