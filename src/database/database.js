import {Sequelize} from 'sequelize'

class Database{
    constructor(){
        this.init()
    }
    init(){
        this.db = new Sequelize({
            database:'catiau',
            dialect:'postgres',
            username:'catiau_user',
            password:'Iwo29E8TSXfj0ZeOT2KmteuaDztLXuUl',
            host:'dpg-dbh81grbc2fs73frajg0-a.oregon-postgres.render.com',
            dialectOptions:{
                ssl:{
                    require: true,
                    rejectUnautorized: false
                }
            }
        })
    }   
}

export default new Database();