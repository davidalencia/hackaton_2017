/**
 * Usuario_vendedorController
 *
 * @description :: Server-side logic for managing Usuario_vendedors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 function infoVendor(req,res) {
 	Vendedor.findOne({
 		Vendedor:req.body.vendedor
 	}).exec((err, vendedor)=>{
 		res.send(vendedor);
 	})
 }
module.exports = {
	infoVendor,
};
