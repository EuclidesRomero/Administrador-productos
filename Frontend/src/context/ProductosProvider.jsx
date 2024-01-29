// eslint-disable-next-line no-unused-vars
import { createContext } from "react";
import { useState, useEffect } from "react";
import clienteAxios from "../../config/ClienteAxios";


const ProductosContext =  createContext();
// eslint-disable-next-line react/prop-types
const ProductosProvider = ({children})=>{
    const [productos, setProductos] = useState([])
    const [alerta, setAlerta] = useState({})
//mostrar los productos
    useEffect(() => {
     const obtenerProductos = async () =>{
        try {
            const {data} = await clienteAxios(`/productos/mostrarProductos`)
            setProductos(data)
        } catch (error) {
            console.log(error )
        }
    }
    obtenerProductos();
    }, [])

   //actualizar un producto por su name, nos aseguramos de que el name no se repita
    const actualizarProducto = async ({productData}, name) =>{
        console.log('nombre del producto a actualizar', name)
        try {
            const {newName, description, brand, price, img, warranty} = productData;
            const response = await clienteAxios.put(`productos/actualizarProducto/${name}`,{newName, description, brand, price, img, warranty});
            console.log(response.data.msg )
            setAlerta({msg: response.data.msg})
            setTimeout(() => {
                setAlerta(" ")
            }, 5000);
        } catch (error) {
            console.log(error  )
        }
 
    } 

    //Eliminar un producto
    const eliminarProducto = async(name) =>{
        try {
            const response = await clienteAxios.delete(`productos/eliminarProducto/${name}`)
            console.log(response.data.msg )
            setAlerta({msg:response.data.msg})
        } catch (error) {
            console.log(error )
        }
    }

    return (
        <ProductosContext.Provider value={{productos, actualizarProducto, alerta, eliminarProducto}}>
            {children}
        </ProductosContext.Provider>
    )

}

export default ProductosContext

export {ProductosProvider}

