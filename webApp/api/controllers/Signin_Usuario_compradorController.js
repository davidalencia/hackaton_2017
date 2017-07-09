/**
 * Signin_Usuario_compradorController
 *
 * @description :: Server-side logic for managing Signin_usuario_compradors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 function createAcount(req, res) {
   Usuario_comprador.findOne({
     usuario_comprador: req.body.usuario_comprador
   }).exec((err, usuario_comprador) => {
     if (typeof usuario_comprador !== "undefined") {
       res.redirect("#")
       res.send("Ya tiene usuario en el sitio");
     } else {
       Usuario_comprador.create({
         Usuario_comprador:req.body.usuario_comprador,
         Nombre:req.body.nombre,
         Apellido:req.body.apellido,
         Telefono:req.body.telefono,
         Correo:req.body.correo,
         Contrasegna:req.body.contrasegna,
         Pais:req.body.pais,
       }).exec(function(err, usuario_comprador) {
         if (err) {
           return res.serverError(err);
         }

         sails.log('Nuevo usuario registrado', req.body.usuario_comprador);
         return res.ok();
       });
     }
   })
 }
 module.exports = {
   createAcount
 };
