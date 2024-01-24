import useProductos from "../hooks/useProductos"
import { Link } from "react-router-dom"
const Producto = () => {
  const { productos } = useProductos()
  return (
    <div className="flex flex-col justify-center items-center bg-gray-400">
      {productos.length !== 0 ? (
        productos.map((producto) => (
          <tr key={producto.id} className="w-2/5 mt-4 rounded-lg bg-white ">
            <div className="flex justify-between">
              <td className="py-2 px-4 border-b size-36" >
                <img className="w-full h-full object-cover size-4" src={producto.img} alt={producto.name} />
              </td>
              <div className="flex">
                <td className="py-2 px-4 border-btext-center flex  flex-col text-center"> <span className="font-bold  text-center mb-5">Descripción del producto:</span>{producto.description}</td>
                <td className="py-2 px-4 border-b text-center flex  flex-col"> <span className="font-bold  text-center mb-5">precio del producto:</span> {producto.price}</td>
                <td className="py-2 px-4 border-b"> <span className=" block font-bold  text-center mb-10">Garantía:</span> {producto.warranty == true ? 'Si' : 'No'}</td>
              </div>
            </div>
            <td className="py-2 px-4 border-b flex justify-between ">
              <Link className="border text-white text-center rounded-lg bg-blue-300 w-32" to={`${producto.nombre}`}>editar producto</Link>
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg">Eliminar</button>
            </td>
          </tr>
        ))
      ) : (
        <h1>NO hay productos</h1>
      )}
    </div>
  )
}

export default Producto
