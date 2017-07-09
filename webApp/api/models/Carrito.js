/**
 * Carrito.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Usuario_comprador:{
      model:"Usuario_comprador",
      required: true
    },
    Ciudad:{
      model: "ciudad",
      required:true,
    },
    Codigo_postal:{
      type:"string",
      required: true,
    },
    Calle:{
      type: "string",
      required: true,
    },
    Num_ext :{
      type: "string",
      required:true,
    },
    Compras:{
      collection:"Compra",
      via:"Carrito",
    }
  }
};
