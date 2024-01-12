// eslint-disable-next-line no-unused-vars
import { createContext } from "react";
import { useState, useEffect } from "react";
import clienteAxios from "../../config/ClienteAxios";


const ProductosContext =  createContext();

// eslint-disable-next-line react/prop-types
const ProductosProvider = ({children})=>{
    const [productos, setProductos] = useState([])

    useEffect(() => {
     const obtenerProductos = async () =>{
        try {
            const {data} = await clienteAxios(`/productos/mostrarProductos`)
            setProductos(data)
            console.log("La respuesta es", data)
        } catch (error) {
            console.log(error)
        }

    }
    obtenerProductos();
    }, [])
    

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )

}

export default ProductosContext

export {ProductosProvider}

