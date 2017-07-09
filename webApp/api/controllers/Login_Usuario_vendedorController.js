/**
 * Login_Usuario_vendedorController
 *
 * @description :: Server-side logic for managing Login_usuario_vendedors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 const bcrypt = require('bcrypt');

  function login(req, res) {
    Usuario_vendedor.findOne({
        Usuario_vendedor: req.body.usuario_vendedor
      }).exec((err, usuario_vendedor) => {
          if (typeof usuario_vendedor !== "undefined") {
            bcrypt.compare(req.body.contrasegna, usuario_vendedor.Contrasegna, (err, result) => {
 						 	console.log(req.body.contrasegna, usuario_vendedor.Contrasegna, result);
 							 if (result) {
                  req.session.authenticated = result;
                  req.session.type = "Vendedor";
                  req.session.id = usuario_vendedor.id;
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
