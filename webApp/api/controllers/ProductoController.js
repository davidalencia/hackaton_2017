/**
 * ProductoController
 *
 * @description :: Server-side logic for managing productoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//la necesitamos el nombre del produto por post
//{produto:"el nombre"}
function infoProducto(req, res) {
	Producto.findOne({id:req.body.id}).exec((err, producto)=>{
		if(err)
			return res.status(500).send("ERROR");
		return res.send(producto);
	});
}

//necesitamos enviar los datos por post
//{producto:"tu producto", descripcion:"tu gran descripciond de maximo 250 caracteres",
//stock:numero, costo:numero, moneda:"tu moneda", categoria:"id_categoria",
// vendedor:"id_vendedor", ciudad:"id_ciudad" }
function productoNuevo(req, res) {
	Producto.create({
		producto:req.body.producto,
		descripcion: req.body.descripcion,
		stock: req.body.stock,
		costo: req.body.costo,
		moneda: req.body.moneda,
		categoria:req.body.categoria,
    vendedor:req.body.vendedor,
    ciudad:req.body.ciudad,
	}).exec((err, producto)=>{
    		if(err)
				     return res.status(500).send("ERROR");

				// TODO: cambiar la dirección a la que redirige
        return  res.redirect('/');
      });
}

//necesitamos enviar los datos por post
//{id:"id_producto"}
function eliminaProducto(req, res) {
	Producto.destroy({id: req.body.id}).exec(function (err){
    if (err)
      return res.negotiate(err);
    return res.ok();
  });
}


//necesitamos el numero de productos que has jalado y cuantos quieres
//{cuantos:"int no mayor a treinta", cuantos_llevas:"int"}
function jalaProductos(req, res) {
	Producto.find().then((found)=>{
		var toSend=[];
		var deAqui=req.body.cuantos_llevas;
		var hastaAqui=parseInt(req.body.cuantos_llevas)+parseInt(req.body.cuantos);
		for(var alfa=deAqui; alfa<hastaAqui; alfa++){
			indice=alfa-req.body.cuantos_llevas
			toSend[indice]=found[alfa];
		}
		return res.send(toSend);
	});
}

module.exports = {
	infoProducto,
	productoNuevo,
	eliminaProducto,
	jalaProductos,

};
