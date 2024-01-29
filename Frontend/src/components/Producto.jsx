import useProductos from "../hooks/useProductos"
import { Link } from "react-router-dom"
import Alert from "./Alert";

const Producto = () => {
  const { productos, eliminarProducto, alerta } = useProductos();

  const handledName = (name) =>{
   eliminarProducto(name)
  }
  const {msg} = alerta
  return (
    <div  className="flex flex-col justify-center items-center bg-gray-400/10">
      {msg && <Alert alerta={alerta} />}
      {productos.length !== 0 ? (
        productos.map((producto) => (
          <div key={producto.id} className="w-2/5 mt-4 rounded-lg bg-white border border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className="py-2 px-4 ml-3 border-b size-36">
                <img className="w-full h-full object-cover size-4" src={producto.img} alt={producto.name} />
              </div>
              <div className="flex flex-col w-3/4 ml-4">
                <div className="font-bold mb-2">Nombre: {producto.name}</div>
                <div className="mb-2">Descripción del producto: {producto.description}</div>
                <div className="mb-2">Precio del producto: {producto.price}</div>
                <div>Garantía: {producto.warranty ? 'Si' : 'No'}</div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Link className="border text-white text-center rounded-lg bg-blue-300 w-32 mr-2" to={`/editar-producto/${producto.name}`}>Editar producto</Link>
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg" onClick={()=> handledName(producto.name)}>Eliminar</button>
            </div>
          </div>
        ))
      ) : (
        <h1>NO hay productos</h1>
      )}
    </div>
  );
};


export default Producto
