const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      //const airplaneRepository = new AirplaneRepository();
      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ... data, totalSeats:airplane.capacity
      });
      return flight;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};      
    }
  }

  async getFlightData() {

  }
}

module.exports = FlightService;

/*

Data includes :

flightNumber
airplaneId
departureAirportId
arrivalAirportId
arrivalTime
departureTime
price
totalSeats -> have to get it from airplane's details

*/
