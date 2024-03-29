import Producto from '../models/Product.js';
import generarId from '../helpers/generarId.js';

const crearProducto = async (req, res) =>{
    const {name, description, id, brand, price, img, warranty} = req.body;
    
   const nombre = name.toLowerCase()
   const productExistente = await Producto.findOne({name: nombre})
    if (productExistente) {
        const error = new Error("El producto ya se encuentra en el sistema")
        return res.status(403).json({msg:error.message})
    }
    //validacion para evitar campos vacios
    if([name, description, id, brand, price, img, warranty].includes('')){
        const error = new Error("Todos los campos son obligarorios server")
        return res.status(403).json({
            msg: error.message
        })
    }
    //si todo va bien, insertamos en la bd
     try {
        const product = new Producto(req.body)
        product.id = generarId()
        product.name = product.name.toLowerCase(); 
        await product.save();
        res.json({msg: "Producto guardado correctamente en el sistema"})
        console.log('Se guardó un nuevo producto')
     }catch(error){
        res.status(403).json({msg: error.message})
     }
}

const mostrarProductos = async (req, res) =>{
    try {
        const productosObtenidos = await Producto.find();
        res.json(productosObtenidos)
    } catch (error) {
        return res.status(403).json({msg: "Error al obtener los productos"})
    }
}

const eliminarProducto = async (req,res) => {
    const name = req.params.name;
    console.log('producto que se va a eliminar',name)
    const nombre = await Producto.findOne({name})   

    if(!nombre){
        const error = new Error("El producto no se encuentra registrado o ingresó mal el nombre")
        return res.status(404).json({msg: error.message})
    }

    try {
        await nombre.deleteOne()
        res.json({msg: "El producto ha sido eliminado con exito"})
    } catch (error) {
        res.json("Hubo un error al eliminar el producto")
        
    }
}

const actualizarProducto = async (req, res) =>{
    const {name} = req.params
    console.log('valor de name', name)
    const producto = await Producto.findOne({name})

    if(producto){
        producto.name = req.body.newName || producto.name;
        producto.description = req.body.description || producto.description;
        producto.brand = req.body.brand || producto.brand;
        producto.price = req.body.price || producto.price;
        producto.img = req.body.img  || producto.img;
        producto.warranty = req.body.warranty || producto.warranty;
        
        try {
            await producto.save()
            res.json({msg: "El producto ha sido actualizado con exito"})
            console.log('1')
        } catch (error) {
            console.log('2')
            return res.status(error.status || 500).json({msg: error.message})
        }
    }

    else{
            console.log('3')
            const error = new Error('El producto no se encuentra registrado')
            return res.status(404).json({
                msg: error.message
            })
            

    }
    
}
export {
    crearProducto,
    mostrarProductos,
    eliminarProducto,
    actualizarProducto
}