const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("🚀 Se conecto Base de Datos Libros!"))
    .catch((err) => console.log("Imposible conectarse a BD Libros", err));