import database from "../database/database.js";

class Atendimento {
    constructor(){
        this.model = database.db.define("Atendimento", {
            id:{
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia:{
                type:database.db.Sequelize.INTEGER,
            },
            hora:{
                type:database.db.Sequelize.String,
            },
            valor:{
                type:database.db.Sequelize.String,
            },
            concluido:{
                type:database.db.Sequelize.boolean,
            }
        })
    }
}

export default new Atendimento().model