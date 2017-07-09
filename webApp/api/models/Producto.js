  /**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    producto:{
      type:"text",
      required:true,
    },
    descripcion:{
      type: "string",
      required:true,
    },
    stock:{
      type:"integer",
      required: true,
    },
    costo:{
      type: "integer",
      required: true,
    },
    direccionImagen:{
      type: "string",
    },
    //currency
    moneda:{
      type:"string",
      required: true,
    },
    categoria:{
      model: "categoria"
    },
    vendedor:{
      model: "Usuario_vendedor",
    },
    ciudad:{
      model:"ciudad",
    },

  }
};
