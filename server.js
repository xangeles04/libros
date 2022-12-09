const express = require('express');
const app = express();
const cors = require('cors') 
/*Permite crear cookies */
const cookieParser = require('cookie-parser');
const port = 8080;



app.use(cors());

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

/*Permite crear cookies */
app.use(cookieParser());

/*Permite crear variables globales */
require('dotenv').config();
require('./server/config/mongoose.config');

require('./server/routes/libros.routes')(app);



app.listen( port, () => console.log('Escuchando puerto 8000, Servidor Libros Coenctado!!!') );