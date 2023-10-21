const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      // if(!compareTime(data.arrivalTime, data.depatureTime)) {
      //   throw {error: 'Arrival time needs to be greater than Departure time'};
      // }
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

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};       
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};       
    }
  }

  async updateFlight(flightId, data) {
    try {
      const flight = await this.flightRepository.updateFlight(flightId, data);
      return flight;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};       
    }
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
