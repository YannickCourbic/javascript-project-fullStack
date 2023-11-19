const Pokemon = require("./Pokemon")
module.exports= (sequelize , DataTypes) => {
    const Sprites = sequelize.define('Sprites', {
        id:{
            type:DataTypes.INT,
            primaryKey:true,
            autoIncrement: true
        },
        regular:{
            type: DataTypes.STRING,
            allowNull: false
        },
        shiny:{
            type:DataTypes.STRING,
            allowNull: true
        },
        gmax: {
            type:DataTypes.STRING,
            allowNull: true
        }
    });
    Sprites.belongsTo(Pokemon)
    return Sprites;
}