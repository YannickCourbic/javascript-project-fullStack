const Pokemon = require("./Pokemon");
module.exports = (sequelize, DataTypes) => {
    const Name =  sequelize.define('Name', {
        id:{
            type: DataTypes.INT,
            primaryKey: true,
            autoIncrement : true
        },
        fr:{
            type: DataTypes.STRING,
            allowNull:false
        },
        en:{
            type: DataTypes.STRING,
            allowNull:false
        },
        jp:{
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    //définir l'association One-to-One
    Name.belongsTo(Pokemon);

    return Name;
}