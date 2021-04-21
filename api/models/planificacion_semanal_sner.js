'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Planificacion_semanal_snerSchema
var itemSchema = Schema({

    descripcion: String,

    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    created_at: String,
    user: { type: Schema.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Item', itemSchema);