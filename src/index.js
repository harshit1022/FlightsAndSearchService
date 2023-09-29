const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverConfig'); 
const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');
const db = require('./models/index');

const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended: true}));

  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on PORT ${PORT}`);

    // Adding Airport and then changing its City
    // Airport was Added
    // but couldn't change its City

    const city = await City.findOne({
      where: {
        id: 2
      }
    });

    // adding airport, have to use some cityId
    // as we have used allowNull : false under cityId
    const newAirport = Airport.findOne({
      where: {
        id: 5
      }
    });

    await city.addAirport(newAirport);

    //db.sequelize.sync({ alter: true });
  });
}

setupAndStartServer();