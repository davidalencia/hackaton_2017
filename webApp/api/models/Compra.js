/**
 * Compra.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    producto:{
      model:"producto",
    },
    cantidad:{
      type: "integer",
      required: true,
      defaultsTo: 1,
    },
    vendedor:{
      model:"Usuario_vendedor",
    },
    comprador:{
      model: "Usuario_comprador",
    },
    Carrito:{
      model:"Carrito"
    }
  }
};
