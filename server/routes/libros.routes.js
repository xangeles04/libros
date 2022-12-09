const { addLibro, getAllLibros, deleteLibro, updateLibro, getOneLibro, addLibroComentario } = require("../controllers/libros.controllers");
//const { getUser, getAll } = require("../controllers/user.controllers");

const UserController = require("../controllers/user.controllers")
const authenticate = require("../config/authenticate")

module.exports = (app) => {
    app.post('/api/libro', addLibro);
    app.get('/api/libro', getAllLibros);
    app.get('/api/libro/:id', getOneLibro)
    app.delete('/api/libro/:id', deleteLibro);
    app.put('/api/libro/:id', updateLibro);
    app.post('/api/libro/review/:id', addLibroComentario)

    //ENDPOINTS QUE NECESITAN AUTENTICACION
  // app.get("/api/users",getAll);
  //  app.get("/api/user/:id",getUser)

  app.post("/api/register",UserController.Register);
  app.post("/api/login",UserController.Login);
  app.post("/api/logout",UserController.Logout);
  app.get("/api/users",authenticate, UserController.getAll);
  app.get("/api/user/:id",authenticate,UserController.getUser)
}