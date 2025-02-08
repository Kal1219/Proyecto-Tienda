const Producto = require('../models/Producto');

exports.getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.crearProducto = async (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen
    });

    try {
        const nuevoProducto = await producto.save();
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};