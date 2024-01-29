import { useState } from "react"
import Alert from '../components/Alert'
import eliminarAlerta from "../helpers/eliminarAlerta"
import clienteAxios from "../../config/ClienteAxios"

const NuevoProducto = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrnd] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    const [warranty, setWarranty] = useState("")
    const [alerta, setAlerta] = useState({})

    const handledSubmit = async (e) => {
        e.preventDefault();
        if ([name, description, brand, price, img, warranty].includes('')) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            eliminarAlerta({ setAlerta })
            return
        }
        //todo: mover todo al provider 
        try {
            const { data } = await clienteAxios.post('/productos/crearProducto', {
                name,
                description,
                brand,
                price,
                img,
                warranty,
            }) 

            setName("");
            setDescription("");
            setBrnd("");
            setPrice("");
            setImg("");
            setWarranty("");

            setAlerta({
                error: false,
                msg: data.msg,
            })
            
        } catch (error) {
            console.log(error.response.data)
            setAlerta({
                error: true,
                msg: error.response.data.msg
            })
        }
        eliminarAlerta({ setAlerta })
    }

    const { msg } = alerta;
    return (
        <>
            <h2 className="text-center mt-2 text-4xl font-bold">Crea un nuevo producto</h2>
            {msg && <Alert alerta={alerta} />}
            <form className="my-10 bg-white shadow md:w-1/2 rounded-lg px-10 py-2 mx-auto" onSubmit={handledSubmit}>
                <div className="mb-5 mt-5">
                    <label className="block text-center font-bold">Nombre del producto</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center  font-bold ">Descripción</label>
                    <textarea className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Marca</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={brand} onChange={e => setBrnd(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Precio</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-center font-bold ">Url imagen</label>
                    <input className="border-2 w-96 h-12 block mx-auto rounded-lg" type="text" value={img} onChange={e => setImg(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="block text-center font-bold " htmlFor="">Garantia</label>
                    <select className=" className=border-2 w-96 rounded-lg block mx-auto" value={warranty} onChange={e => setWarranty(e.target.value)}>
                        <option value="" ></option>
                        <option value="true">SI</option>
                        <option value="false">NO</option>
                    </select>
                </div>
                <div className="mb-5">
                    <input className="border-2 w-40 block mx-auto rounded-lg hover:cursor-pointer bg-blue-400 text-white" type="submit" value="Guardar producto" />
                </div>
            </form>
        </>
    )
}

export default NuevoProducto
