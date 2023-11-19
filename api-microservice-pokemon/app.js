const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./Src/Sequelize/SequelizeData");

app
    .use(bodyParser.json())
    .use(cors())

sequelize.getConnexion();

app.use(({res}) => {
    const message = "Impossible de trouver la ressource demandé! Vous pouvez essayer une autre URL";
    res.status(404).json({message});
})

app.listen(port , () => {
    console.log(`Notre application Node a démarée sur : https://localhost:${port}`);
})