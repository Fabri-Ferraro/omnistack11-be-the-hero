const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/** 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeadas enviados na rota após o "?" (Filtros, paginação)
 * Ex: localhost:3333/users?name=Diego
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * Ex: localhost:3333/users/1
 * /users/:id
 * 
 * Request Body: O corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */