const express = require("express");

// Cria o servidor.
const server = express();

// Permite receber JSON nas requisições feitas.
server.use(express.json());

// Array que salva os cursos cadastrados, porém de forma temporária.
const cursos = [`Node.js`, `JavaScript`, `React Native`, `Pyton`, `C#`];


// Middleware que verifica se o nome do curso foi enviado na requisição.
function checkNameCurso(req, res, next) {
    
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatório!" });
    }

    return next();
}

// Middleware que verifica se o índice informado existe no array de cursos.
function checkIndexCurso(req, res, next) {
    
    const curso = cursos[req.params.index];

    if (!curso) {
        return res.status(400).json({ error: "O curso não existe!" });
    }

    return next();
}

// =========================================
// GET - Lista todos os cursos cadastrados.
//
// Query Params (Opcional):
// localhost:3000/cursos?name=JavaScript (Exemplo de busca)
//
// Se nenhum parâmetro for informado, retorna todos os cursos.
//
// Caso seja informado um nome, retorna apenas o curso pesquisado.
// =========================================
server.get("/cursos", (req, res) => {

    const {name} = req.query;

    if (!name) {
        return res.json(cursos);
    }

    const curso = cursos.find(curso => curso.toLocaleLowerCase() === name.toLocaleLowerCase());

    if (!curso) {
        return res.status(404).json({error: "Curso não encontrado!"});
    }

    return res.json(curso);
});


// ===================================
// GET - Busca um curso pelo índice.
//
// Exemplo:
// localhost:3000/cursos/1
// ===================================
server.get("/cursos/:index", checkIndexCurso, (req, res) => {

    const {index} = req.params;

    return res.json(cursos[index]);
});


// ==========================================
// POST - Adiciona um novo curso.
//
// Body:
// {
//     "name": "Express"
// }
// ==========================================
server.post("/cursos", checkNameCurso, (req, res) => {

    const {name} = req.body;

    cursos.push(name);

    return res.json(cursos);
});


// ==========================================
// PUT - Atualiza um curso existente.
//
// Route Params:
// localhost:3000/cursos/2
//
// Body:
// {
//     "name": "Express.js"
// }
// ==========================================
server.put("/cursos/:index", checkNameCurso, checkIndexCurso, (req, res) => {

    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
});


// ==========================================
// DELETE - Remove um curso pelo índice.
//
// Exemplo:
// localhost:3000/cursos/3
// ==========================================
server.delete("/cursos/:index", checkIndexCurso, (req, res) => {  

    const {index} = req.params;                      

    cursos.splice(index, 1);

    return res.send("Curso deletado com sucesso!");
});

// Inicia o servidor na porta 3000.
server.listen(3000);