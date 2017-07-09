/**
 * CiudadController
 *
 * @description :: Server-side logic for managing Ciudads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 function infoCiudad(req,res) {
 	Ciudad.findOne({
 		Ciudad:req.body.ciudad
 	}).exec((err, ciudad)=>{
 		res.send(ciudad);
 	})
 }

 module.exports = {
 	infoCiudad,
 };
