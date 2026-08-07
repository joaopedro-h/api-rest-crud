# 🚀 API CRUD - Express.js

Primeiro projeto desenvolvido utilizando **Express.js** para praticar os conceitos básicos de uma API REST.

O projeto foi criado durante os estudos com o objetivo de compreender o funcionamento das rotas HTTP, parâmetros de requisição, middlewares e operações básicas de um CRUD.

---

# 📚 Objetivo

Praticar os primeiros conceitos de desenvolvimento de APIs utilizando Node.js e Express.js.

---

# 🚀 Funcionalidades

- 📄 Listar todos os cursos
- 🔍 Buscar um curso pelo nome utilizando Query Params
- 📌 Buscar um curso pelo índice utilizando Route Params
- ➕ Cadastrar um novo curso
- ✏️ Atualizar um curso existente
- ❌ Remover um curso
- ✅ Validação de dados através de Middlewares

---

# 📌 Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/cursos` | Lista todos os cursos |
| GET | `/cursos?name=Node.js` | Busca um curso pelo nome |
| GET | `/cursos/:index` | Busca um curso pelo índice |
| POST | `/cursos` | Cadastra um novo curso |
| PUT | `/cursos/:index` | Atualiza um curso |
| DELETE | `/cursos/:index` | Remove um curso |

---

# 🛠️ Tecnologias

- Node.js
- Express.js
- Postman

---

# 📖 Conceitos praticados

- API REST
- Rotas HTTP
- GET
- POST
- PUT
- DELETE
- Route Params
- Query Params
- Request Body
- Middlewares
- Validação de requisições
- Respostas em JSON

---

# ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/joaopedro-h/seu-repositorio.git
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
node index.js
```

A API será iniciada em:

```txt
http://localhost:3000
```

---

# 📚 Observação

Este projeto foi desenvolvido exclusivamente para fins de estudo, sendo minha primeira implementação de uma API REST utilizando Express.js.