import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
  name: {
    type: String,
    rquired: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  id : {
    type: String,
    unique: true,
    trim: true
  },

  brand: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  img: {
    type: String,
    required: true,
    trim: true
  },

  warranty: {
    type: Boolean,
    duration: Number,
    warranty_init: Number,
  },
});

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;

