import {Sequelize} from "sequelize";

let sequelize;
if(process.env.NODE_ENV === "development"){
    sequelize = new Sequelize("microservice-pokemon-express" , "root" , "" , {
        host:"127.0.0.1",
        dialect:"mysql",
        dialectOptions:{
            timezone: "Europe/Paris"
        },
        logging: true
    })
}

const getConnexion = () => {
    return sequelize.sync({force:false}).then(
        _=>{
            console.log("La base de donnée a été initialisée !")
        }
    )
}

module.exports = {
    getConnexion,
    sequelize
}