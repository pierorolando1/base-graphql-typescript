import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
        default: 0,
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },

});

export const Product = model('Producto', ProductSchema);