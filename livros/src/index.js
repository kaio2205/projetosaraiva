require("dotenv").config()
const express = require("express")
const route_titulo = require("./routes/titulos.js")
const route_precos  = require("./routes/preco/precos.js")
const route_foto  = require("./routes/fotos/fotos.js")


const app = express()

app.use(express.json())

app.use("/api/v1/livros",route_titulo)
app.use("/api/v1/precos",route_precos)
app.use("/api/v1/foto",route_foto)


app.listen(process.env.HOST_PORT,()=>{
    console.log(`servidor online em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})