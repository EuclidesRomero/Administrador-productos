import express from 'express'
import dotenv from 'dotenv'
import conectarDb from './config/db.js'
import producRoutes from './routes/productRoutes.js'
import cors from 'cors'


const app = express();
dotenv.config()
app.use(express.json());
conectarDb();

//Creamos la lista blanca de las conexiones que vamos a permitir

const whiteList = [process.env.FRONTED_URL]

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            callback(null, true)
        }
        else{
            callback(new Error('Cors error'))
        }
    }
}

app.use(cors(corsOptions))

//puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

app.use("/api/productos", producRoutes)