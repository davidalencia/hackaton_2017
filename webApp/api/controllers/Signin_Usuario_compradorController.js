/**
 * Signin_Usuario_compradorController
 *
 * @description :: Server-side logic for managing Signin_usuario_compradors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function createAcount(req, res) {
  Usuario_comprador.findOne({
    Usuario_comprador: req.body.usuario_comprador
  }).exec((err, usuario_comprador) => {
    if (typeof usuario_comprador !== "undefined") {
      res.redirect("#")
      res.send("Ya tiene usuario en el sitio");
    } else {
      Usuario.create(req.body.usuario_comprador).exec(function(err,usuario_comprador) {
        if (err) {
          return res.serverError(err);
        }

        sails.log('Nuevo usuario comprador: ' + req.body.usuario_comprador);

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
