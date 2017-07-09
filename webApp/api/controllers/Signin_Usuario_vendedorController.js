/**
 * Signin_Usuario_vendedorController
 *
 * @description :: Server-side logic for managing Signin_usuario_vendedors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function createAcount(req, res) {
  Usuario_vendedor.findOne({
    Usuario_vendedor: req.body.usuario_vendedor
  }).exec((err, usuario_vendedor) => {
    if (typeof usuario_vendedor !== "undefined") {
      res.redirect("#")
      res.send("Ya tiene usuario en el sitio");
    } else {
      Usuario_vendedor.create({
        Usuario_vendedor:req.body.usuario_vendedor,
        Nombre:req.body.nombre,
        Apellido:req.body.apellido,
        Telefono:req.body.telefono,
        Correo:req.body.correo,
        Contrasegna:req.body.contrasegna,
        Ciudad:req.body.ciudad,
        Codigo_postal:req.body.codigo_postal,
        Calle:req.body.calle,
        Num_ext :req.body.num_ext,
      }).exec(function(err, usuario_vendedor) {
        if (err) {
          return res.serverError(err);
        }

        sails.log('Nuevo usuario registrado', req.body.usuario_vendedor);
        return res.ok();
      });
    }
  })
}
module.exports = {
  createAcount
};
