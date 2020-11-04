const  express = require('express');
const bodyParser = require('body-parser');

const {config} = require('./config/index');

const db = require('./db');
const router = require('./network/routes');

const app = express();

  db(config.dbUrl);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);
router(app);

//servidor de estaticos
app.use('/app', express.static("public"));


app.listen(config.port, function () {
  console.log(`Escuchando en  ${config.host}${config.port}`);
});

