import database from "../database/database.js";

class Cliente {
    constructor(){
        this.model = database.db.define("cliente", {
            id:{
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome:{
                type:database.db.Sequelize.String,
            },
            email:{
                type:database.db.Sequelize.String,
            },
            senha:{
                type:database.db.Sequelize.String,
            }
        })
    }
}

export default new Cliente().model