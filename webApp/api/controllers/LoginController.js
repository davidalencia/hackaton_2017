/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function getConstrasegnia(req, res) {
	Usuario_comprador.findOne({
    Usuario_comprador:req.body.usuario_comprador
  }).exec((err, usuario_comprador)=>{
			Contrasegna:req.get(Contrasegna)
			res.send(Contrasegna);
  })
 }

module.exports = {
	getConstrasegnia,
};
