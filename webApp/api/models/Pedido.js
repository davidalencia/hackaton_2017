/**
 * Pedido.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Usuario_vendedor:{
      model:"Usuario_vendedor"
    },
    Carrito:{
      model: "Carrito"
    }

  }
};
