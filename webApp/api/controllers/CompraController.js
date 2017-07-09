/**
 * ComprarController
 *
 * @description :: Server-side logic for managing comprars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//necesitamos los datos por post
//{producto:"id", catidad:"int", vendedor:"id", comprador:"id", ciudad:"id", codigo:"codigo", calle:"calle", num:"num"}
function agregarAlCarro(req, res) {
	console.log("entro")
	Producto.findOne({id:req.body.producto}).exec((err, enStock)=>{
		if(err)
				 return res.status(500).send("ERROR");
		if(typeof enStock==="undefined")
				return res.status(500).send("ya no hay en stock o el vendedor dejo de venderlo");
		else if(parseInt(enStock.stock)< parseInt(req.body.cantidad))
				return res.send("no hay suficiente stock para tu pedido");
			console.log("paso los basicos de enStock")
		Carrito.findOrCreate({Usuario_comprador:req.body.comprador,/*req.session.id*/Ciudad:req.body.ciudad, Codigo_postal:req.body.codigo, Calle:req.body.calle, Num_ext:req.body.num})
			.exec((err, carrito)=>{
				if(err)
					 return res.status(500).send(err);
					Compra.findOne({Producto:req.body.producto, Carrito: carrito.id}).exec((err, producto)=>{
							if(typeof producto!=="undefined")
								Compra.update(
									{Producto:req.body.producto,
										Carrito: carrito.id},
									{producto:req.body.producto,
									cantidad:req.body.cantidad,
									vendedor: req.body.vendedor,
									comprador: req.body.comprador,//TODO: cambiar por req.session.id
									Carrito: carrito.id})
									.exec((err, producto)=>{
						    		if(err)
										     return res.status(500).send("ERROR");
										return res.ok();
								  });
							else
								Compra.create({
										producto:req.body.producto,
										cantidad:req.body.cantidad,
										vendedor: req.body.vendedor,
										comprador: req.body.comprador,//TODO: cambiar por req.session.id
										Carrito: carrito.id
								}).exec((err, producto)=>{
							    		if(err)
											     return res.status(500).send("ERROR");
							  });

								console.log("paso la instanciación de compra")
							var stockRestante=enStock.stock-req.body.cantidad
							if(stockRestante==0)
								Producto.destroy({id:req.body.producto}).exec((err, producto)=>{
									if(err)
											 return res.status(500).send("ERROR");
									return res.ok();
								});
							else
								Producto.update({id:req.body.producto},
									{stock: stockRestante}).exec((err, producto)=>{
										console.log("update producto", stockRestante, producto);
										if(err)
												 return res.status(500).send("ERROR");
										return res.ok();
									});
					});
			});
		});
}

module.exports = {
	agregarAlCarro,
};
