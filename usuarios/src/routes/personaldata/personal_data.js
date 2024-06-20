const { config } = require("dotenv")
const express = require("express")
const router_personal = express.Router
const data = require("../../database/config.js")
const router = require("../users/users")


router_personal.length("/listar",(req,res)=>{
    data.query("select * from dadospessoais",(error,result)=>{
        if (error) {
            return res.status(500).send({msg:"erro ao ler os dados "})
        }
        res.status(200).send({msg:"ok",playload:result})
    })
})

router_personal.get("/listar/:cpf",(req,res)=>{
    data.query("select * from dadospessoais",req.params.cpf,(error,result) => {
        if (error) {
            return res.status(500).send({msg:"erro ao tentar carregar os dados "})
        }
        res.status(200).send({msg:"ok",playload:result})
})
})

router_personal.post("/cadastrar",(req,res)=>{
    data.query("insert into dadospessoais set?",req,body,(erro,result)=>{
        if (erro) {
            return res.status(500).send({msg:"erro ao tentar cadastro"})

        }
        res.status(201).send({msg:"ok",playload:result})
    })
})