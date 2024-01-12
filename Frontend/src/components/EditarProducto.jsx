import { useParams } from "react-router-dom"

const EditarProducto = () => {
    const params = useParams()
    const {nombre} = params
    console.log(nombre)
    
  return (
    <div>
        <h2>Editar un producto</h2>
      
    </div>
  )
}

export default EditarProducto
