const Name = require("./Name");
const Sprites = require("./Sprites");
module.exports = (sequelize , DataTypes) => {
    const Pokemon =  sequelize.define('Pokemon' , {
        id:{
            type: DataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
        },
        pokedexId: {
            type:DataTypes.INT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    // Définir l'association One-to-One
    Pokemon.hasOne(Name, {as: "name"}); //'name' sera le nom de la relation dans le modèle Pokemon
    Pokemon.hasOne(Sprites , {as: "sprites"});
    return Pokemon;
}