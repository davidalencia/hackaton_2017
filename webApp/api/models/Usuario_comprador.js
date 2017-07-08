/**
 * Usuario_comprador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Usuario_comprador:{
      type:"string",
      required:true,
      unique: true,
    },
    Nombre:{
      type: "string",
      required: true,
    },
    Apellido:{
      type: "string",
      required: true//no estoy seguro
    },
    Telefono:{
      type:"string",
      required:true,
    },
    Correo:{
      type: "email",
      required: true,
    },
    Contrasegna:{
      type: "string",
      required: true,
    },
    beforeCreate:(values, cb)=>{
      return bcrypt.hash(values.contrasegna, 10, (err, hash)=>{
        if(err)
          return cb(err);
        values.contrasegna=hash;
        return cb(null, values);
      });
    },
  }
};
