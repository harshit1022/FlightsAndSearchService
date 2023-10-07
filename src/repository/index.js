module.exports = {
  CityRepository : require('./city-repository'),
  FlightRepository : require('./flight-repository'),
  AirplaneRepository : require('./airplane-repository'),
  AirportRepository : require('./airport-repository'),
  CrudRepository : require('./crud-repository')
}
// you are importing from city-repository.js, airport-repository.js, flight-repository.js, 
// and then exporting, so that you have to just require 1 time in the main file...writing here require 3 times saves you from writing in the main file
// here you CAN USE A DIFFERENT NAME than the class name that your are importing