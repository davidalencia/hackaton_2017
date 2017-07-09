/**
 * Usuario_vendedorController
 *
 * @description :: Server-side logic for managing Usuario_vendedors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 function infoVendor(req,res) {
 	Usuario_vendedor.findOne({
 		Usuario_vendedor:req.body.usuario_vendedor
 	}).exec((err, usuario_vendedor)=>{
 		res.send(usuario_vendedor);
 	})
 }
module.exports = {
	infoVendor,
};
