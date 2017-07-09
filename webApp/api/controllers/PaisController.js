/**
 * PaisController
 *
 * @description :: Server-side logic for managing Pais
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//sfjsdjfsdkjfl
//funcion que recibe el nombre del pais por medio del post post
function infoPais(req,res) {
	Pais.findOne({
		Pais:req.body.pais
	}).populate("Estados").exec((err, pais)=>{
		console.log(pais);
		res.send(pais);

	})
}
module.exports = {
	infoPais,
};
