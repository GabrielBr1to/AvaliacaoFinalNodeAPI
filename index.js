import express from 'express'
import router from './src/router/cliente.js'
import database from './src/database/database.js';


const app = express();
app.use(express.json())

app.use("/api", router)

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

