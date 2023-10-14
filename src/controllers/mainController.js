const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		// Do the magic
		const productosLeidos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productosVisitadosFiltrados = productosLeidos.filter( producto => {
			return producto.category == "visited"
		})

		let productosEnOfertaFiltrados = productosLeidos.filter( producto => {
			return producto.category == "in-sale"
		})

		res.render("index", {
			productosVisitados: productosVisitadosFiltrados, 
			productosEnOferta: productosEnOfertaFiltrados
			}
		);
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
