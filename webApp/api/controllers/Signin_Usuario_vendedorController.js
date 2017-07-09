/**
 * Signin_Usuario_vendedorController
 *
 * @description :: Server-side logic for managing Signin_usuario_vendedors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 function createAcount(req, res) {
   usuario_vendedor.findOne({
     usuario_vendedor: req.body.usuario_vendedor
   }).exec((err, usuario_vendedor) => {
     if (typeof usuario_vendedor !== "undefined") {
       res.redirect("#")
       res.send("Ya tiene usuario en el sitio");
     } else {
       Usuario.create(req.body.usuario_vendedor).exec(function(err,usuario_vendedor) {
         if (err) {
           return res.serverError(err);
           sails.log('Nuevo usuario Vendedor: ' + req.body.usuario_vendedor);
         }


         Usuario.create(req.body.contrasegna).exec(function(err, contrsegna) {
           if (err) {
             return res.serverError(err);
           }

           sails.log('contrasegna nueva :' + req.body.contrasegna);
           return res.ok();
         });


       });
     }
   })
 }
 module.exports = {
   createAcount
 };
