/**
 * ProductoController
 *
 * @description :: Server-side logic for managing productoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//la necesitamos el nombre del produto por post
//{produto:"el nombre"}
function infoProducto(req, res) {
	Producto.findOne({Producto:req.body.producto}).exec(err, producto){
		res.send(producto);
	}
}

//necesitamos enviar los datos por post
//{producto:"tu producto", descripcion:"tu gran descripciond de maximo 250 caracteres",
//stock:numero, costo:numero, moneda:"tu moneda", categoria:"id_categoria",
// vendedor:"id_vendedor", ciudad:"id_ciudad" }
// function productoNuevo(req, res) {
// 	Producto.create({
// 		producto:req,
// 		descripcion: "esto es una gran descripcion "
// 		stock: 22,
// 		costo: "200",
// 		moneda: "pesos",
// 		categoria:,
//     vendedor:,
//     ciudad:"id_ciudad",
// 	})
// }


module.exports = {
	infoProducto,

};
