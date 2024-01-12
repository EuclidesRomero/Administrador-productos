import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductosProvider } from "./context/ProductosProvider"
import BaseLayout from "./layouts/BaseLayaout"
import Productos from "./pages/Productos"
import CrearProducto from './pages/CrearProducto'
import EditarProducto from './components/EditarProducto'


function App() {

  return (
    <>
      <BrowserRouter>
        <ProductosProvider>
          <BaseLayout>
          <Routes>
           <Route  path="/" element={<Productos />} />
           <Route path="/crear-producto" element ={<CrearProducto />} />
           <Route path=':nombre' element ={<EditarProducto />} />
          </Routes>
          </BaseLayout>
        </ProductosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
