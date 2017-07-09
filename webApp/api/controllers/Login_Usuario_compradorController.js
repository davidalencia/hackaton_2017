/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const bcrypt = require('bcrypt');

 function login(req, res) {
   Usuario_comprador.findOne({
       Usuario_comprador: req.body.usuario_comprador
     }).exec((err, usuario_comprador) => {
         if (typeof usuario_comprador !== "undefined") {
           bcrypt.compare(req.body.contrasegna, usuario_comprador.Contrasegna, (err, result) => {
						 	console.log(req.body.contrasegna, usuario_comprador.Contrasegna, result);
							 if (result) {
                 req.session.authenticated = result;
                 req.session.type = "comprador";
                 req.session.id = usuario_comprador.id;
                 console.log("Acaba de hacer login: " + req.session.name + "permission" +
                   +req.session.type);
                 res.redirect("/"); //falta ruta de la pagina de inicio
               } else {
                 console.log("Entradas fallidas");
                 res.redirect("/"); //falta la ruta de la parte del login
               }
           });
         }
				 else {
				 	req.session.name = req.body.usr;
					res.redirect("#");
				 }
       })
	}
module.exports = {
	login,
}
