const Libro = require("../models/libros.models")

module.exports.addLibro = async (req, res) => {
    try {
        const newLibro = await Libro.create(req.body);
        res.json({ 
            message: 'Se ha creado un Libro de manera exitosa',
            newLibro
        });
        
    } catch (error) {
        res.status(500).json({ 
            message: 'No hemos podido crear el libro',
            error
        })
        
    }
        
}

module.exports.getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json({ 
            message: 'Operación Existosa desplegando todos los Libros',
            libros
        })

    } catch(err) {
        res.status(500).json({ 
            message: 'No hemos podido desplegar los Libros',
            err
        })
    }
}

module.exports.deleteLibro = async (req, res) => {
    try {
        const { id } = req.params;

        await Libro.deleteOne({ _id: id });
        res.json({ 
            message: 'Operación Satisfactoria. Se ha eliminado Libro'
        })

    } catch(err) {
        res.status(500).json({ 
            message: 'El libro no fue eliminado',
            err
        })
    };
}

module.exports.updateLibro = async (req, res) => {
    try {
        const { id } = req.params;
        
        const libroUpdated = await Libro.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ 
            message: 'Se ha actualizado libro satisfactoriamente',
            libroUpdated
        })


    } catch(err) {
        res.status(500).json({ 
            message: 'No hemos podido actualiar el Libro',
            err
        });
    };
}

module.exports.getOneLibro = async (req, res) => {
    try {
        const { id } = req.params;

        const libro = await Libro.findById(id);
        res.json({ 
            message: 'Se trajo Libro Satisfactoriamente',
            libro
        });

    } catch(err) {
        res.status(404).json({ 
            message: 'No se encontro el Libro',
            err
        });
    }
}

module.exports.addLibroComentario = async (req, res) => {
    try {
        const { id } = req.params;
        const libroUpdated = await Libro.findByIdAndUpdate(id, {
          
            $push: {
                
                comentarios: req.body
            }
        }, { new: true });

        res.json({ message: 'Comentario Ingresado Satisfactoriamente', libroUpdated })


    } catch(err) {
        res.status(500).json({ 
            message: 'No se ingreso Comentario',
            err
        });
    }
}
