/*
    Rota / Recuso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o '?'
  * Route Params: ParÂmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, Postgree, Oracle, Microsoft, SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */


   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
    /*{
    origin : http/meuapp.com
}*/
));
app.use(express.json());
app.use(routes);


app.listen(3333);