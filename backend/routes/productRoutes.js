import express from 'express'
import { crearProducto, mostrarProductos, eliminarProducto, actualizarProducto} from '../controller/productController.js'

const router = express.Router()
router.post("/crearProducto", crearProducto)
router.get("/mostrarProductos", mostrarProductos)
router.delete("/eliminarProducto/:name", eliminarProducto)
router.put('/actualizarProducto/:name', actualizarProducto)

export default router