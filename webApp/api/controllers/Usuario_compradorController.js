/**
 * Usuario_compradorControllerController
 *
 * @description :: Server-side logic for managing Usuario_compradorcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 function infoComprador(req,res) {
  Comprador.findOne({
    Comprador:req.body.comprador
  }).exec((err, comprador)=>{
    console.log(comprador);
    res.send(comprador);
  })
 }

module.exports = {
  infoComprador
};
