import express from 'express'
import clienteRouter from './src/router/cliente.js'
import atendimentoRouter from './src/router/atendimento.js'
import database from './src/database/database.js';


const app = express();
app.use(express.json())

app.use("/api/a", atendimentoRouter)
app.use("/api/c", clienteRouter)

database.db
    .sync({force:false})
    .then((_) => {
        app.listen(3000, () => {
            console.log("servidor hosteado na porta 3000")
        })
    })

    .catch((e) => {
        console.log(e)
    })
