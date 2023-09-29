const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require('./config/serverConfig'); 
const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');

const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended: true}));

  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on PORT ${PORT}`);

    // const airports = await Airport.findAll();
    // const airports = await City.findAll({
    //   where: {
    //     id: 2
    //   },
    //   include: [
    //     {
    //       model: Airport
    //     }
    //   ]
    // });
    // console.log(airports);

    // const cityName = "Bengalore"; // Replace with the desired city name
    // City.findOne({
    //   where: { name: cityName },
    //   include: Airport, // Include the associated Airport model
    // })
    // .then((city) => {
    //   if (city) {
    //     // Access the airports associated with the city
    //     const airports = city.Airports;
    //     console.log(`Airports in ${cityName}:`);
    //     airports.forEach((airport) => {
    //       console.log(airport.name);
    //     });
    //   } else {
    //     console.log(`City ${cityName} not found.`);
    //   }
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    // const city = await City.findOne({
    //   where: {
    //     id: 2
    //   }
    // });
    // const airport = await city.getAirports();
    // console.log(city, airport);
  })
}

setupAndStartServer();