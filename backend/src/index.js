const express = require('express');
//cors -> segurança. Quem pode acessar essa aplicação:
const cors = require('cors')
const routes = require('./routes');

const app = express();

//em desenvolvimento - todas as aplicações front end podem acessar:
app.use(cors());
/* após o lançamento: 
app.use(cors({
    origin: 'meuapp.com'
}));
*/

app.use(express.json());
app.use(routes);

app.listen(3333);
