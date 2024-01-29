import { useParams } from "react-router-dom"
import { useState } from "react";
import useProductos from "../hooks/useProductos";
import Alert from "./Alert";

const EditarProducto = () => {
    const { nombre: name } = useParams();
    const [newName, setName] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState ("")
    const [price, setPrice] = useState ("")
    const [img, setImg] = useState("")
    const [warranty, setWarranty]= useState("")

    const {actualizarProducto, alerta} = useProductos();
    
    const handledSubmit = (e) =>{
      e.preventDefault();   
      const productData = {newName, description, brand, price, img, warranty}
      actualizarProducto({productData}, name)

    }

    const { msg } = alerta;
   
  return (
    <>
            <h2 className="text-center mt-2 text-4xl font-bold">Edita tu producto</h2>
            {msg && <Alert alerta={alerta} />}
            <form className="my-10 bg-white shadow md:w-1/2 rounded-lg px-10 py-2 mx-auto" onSubmit={handledSubmit}>
                <div className="mb-5 mt-5">
                    <label className="block text-center font-bold">Nombre del producto</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={newName} onChange={e=> setName(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-center  font-bold ">Descripción</label>
                    <textarea className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={description} onChange={e=> setDescription(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Marca</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={brand} onChange={e=> setBrand(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Precio</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={price} onChange={e=> setPrice(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Url imagen</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={img} onChange={e=> setImg (e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="block text-center font-bold " htmlFor="">Garantia</label>
                    <select  className=" className=border-2 w-96 rounded-lg block mx-auto"  value={warranty} onChange={e=> setWarranty(e.target.value)}>
                        <option value=" "></option>
                        <option value="true">SI</option>
                        <option value="false">NO</option>
                    </select>
                </div>
                <div className="mb-5">
                    <input className="border-2 w-40 block mx-auto rounded-lg hover:cursor-pointer bg-blue-400 text-white" type="submit" value="Actualizar producto" />
                </div>
            </form>
        </>
  )
}

export default EditarProducto
