require("dotenv").config()
const jwt = require("jsonwebtoken")


const verificar = (req, res, next) => {
    //   criar uma constante para guardar o token
    // que o usuario ira enviar, no cabeçalho  requisição
    const token_enviado = req.headers.token
    if(!token_enviado){
        return res.status(401).send({msg:"Nao autenticado. Efetue o login"})
    }
    jwt.verify(token_enviado,process.env.JWT_KEY,(error,result)=>{
        if(error){
            return res.status(403).send({msg:"Você nao tem  autorização para acessar este conteúdo"})
        }
        next()
    })
}

module.exports = verificar