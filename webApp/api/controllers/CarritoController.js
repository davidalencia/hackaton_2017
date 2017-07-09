/**
 * CarritoController
 *
 * @description :: Server-side logic for managing carritoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//necesitamos los datos por post
//{}
//
// function comprarCarrito(req, res) {
// 	var checked=[];
// 	Carrito.findOne({Usuario_comprador: req.body.id/*req.sessions.id*/})
// 		.populate('Compras')
// 		.exec((err, carrito)=>{
// 			new Promise(function(resolve, reject) {
// 				for (var i = 0; i <carrito.Compras.length ; i++) {
// 						Producto.find({id: carrito.Compras[i].producto}).exec((err, producto)=>{
// 							if(err)
// 								return res.status(500).send(err);
//
// 						console.log("i: "+i);
// 						console.log("carrito"+carrito.Compras[i]);
// 						if(stock>=carrito.Compras[i].cantidad)
// 							Pedido.create({
// 								Usuario_vendedor:carrito.Compras[i].vendedor,
// 								Carrito: carrito.id
// 							}).exec((err, result)=>{
// 								if(err)
// 									return res.status(500).send(err);
// 							});
// 					})
// 				}
// 			}).then((result)=>{
// 				res.ok();
// 			})
// 		});
//}

// function comprarCarrito(req, res) {
// 	var checked=[];
// 	var id;
// 	let cantidad, vendedor
// 	Carrito.findOne({Usuario_comprador: req.body.id/*req.sessions.id*/})
// 		.populate('Compras')
// 		.exec((err, carrito)=>{
// 			new Promise(function(resolve, reject) {
// 				for(var i=0; i<carrito.Compras.length; i++){
// 					cantidad=carrito.Compras[i].cantidad;
// 					vendedor=carrito.Compras[i].vendedor
//
// 					Producto.findOne({id:carrito.Compras[i].producto}).exec((err, producto)=>{
// 						if(producto.stock>=cantidad){
// 							Pedido.create({
// 								Usuario_vendedor:vendedor,
// 								Carrito: carrito.id}).exec((err, producto)=>{
// 										if(err)
// 												 return res.status(500).send("ERROR");
// 										checked[i]="Compra exitosa";
// 							});
// 							console.log(cantidad);
// 							if((producto.stock-carrito.Compras[i].cantidad)==0)
// 								Producto.destroy({id:carrito.Compras[i].id}).exec((err, producto)=>{
// 										if(err)
// 												 return res.status(500).send("ERROR");
// 								});
// 							else{
// 								var stockRestante=producto.stock-carrito.Compras[i].cantidad
// 								Producto.update({id:carrito.Compras[i].id}, {stock:stockRestante}).exec((err, producto)=>{
// 										if(err)
// 												 return res.status(500).send("ERROR");
// 								});
// 							}
// 						}
// 						else {
// 								checked[i]="Compra no exitosa";
// 						}
// 					})
//
// 				}
// 				if(i==carrito.Compras.length)
// 					resolve();
// 			}).then((result)=>{
// 				res.send(checked);
// 			})
//
//
// 		});
// }
module.exports = {
	//comprarCarrito,
};
