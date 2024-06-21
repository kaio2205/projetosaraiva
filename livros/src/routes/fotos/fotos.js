const express =  require("express")
const route_foto = express.Router()
const data = require("../../database/config")

route_foto.post("/cadastrar",(req,res)=>{
    data.query("insert into fotos set ?",req.body,(error,result)=>{
        if (error) {
            return res.send(500).send({msg:"erro ao tentar cadastrar"})
        }
        res.status(201).send({msg:"ok" , payload: result })
    })
})

module.exports = route_foto