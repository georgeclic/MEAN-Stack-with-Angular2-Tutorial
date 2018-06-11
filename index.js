const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('NO ES POSIBLE conectar a la base de datos', err);
    } else {
        console.log('CONECTADO a la base de datos: ' + config.db);
    }

});

app.use(express.static(__dirname + 'miapp/dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/miapp/dist/miapp/index.html'));
  });
  
  app.listen(8080, () => {
      console.log('Servidor activo en puerto 8080')
  });