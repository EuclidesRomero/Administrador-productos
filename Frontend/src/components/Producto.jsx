import useProductos from "../hooks/useProductos"
import { Link } from "react-router-dom"
const Producto = () => {
    const {productos} = useProductos()
    
  return (
    <div className="grid grid-cols-4 w-auto p-16">
    {productos.length !== 0 ? (
      productos.map((producto) => (
        <div key={producto.id} className="max-w-md mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="bg-blue-50-500 w-full h-52">
           <img className="w-full h-full object-cover" src={producto.img} alt={producto.name} />
          </div>
          <div className="p-4 h-full">
            <p className="text-center text-2xl font-bold mb-2">{producto.name}</p>
            <div className="flex flex-wrap">
             <p className="text-gray-700">{producto.description}</p>
            </div>      
            <div className="flex justify-between ">
            <p className="text-green-300 block">{producto.price}$</p>
            <p>garantía: {`${producto.warranty? 'Si' : 'No'}`}</p>
            <Link className="border text-black font-bold rounded-lg" to={`${producto.nombre}`}>ver producto</Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <h1>NO hay productos</h1>
    )}
  </div>
  )
}

export default Producto
