const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

  #createFilter(data) {
    let filter = {};
    if(data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }    

    // Method - 2
    // if (data.minPrice || data.maxPrice) {
    //   filter.price = {}; // Create an empty object for the 'price' property
    //   if (data.minPrice) {
    //     filter.price[Op.gte] = data.minPrice;
    //   }
    //   if (data.maxPrice) {
    //     filter.price[Op.lte] = data.maxPrice;
    //   }
    // }

    // Method - 3
    let priceFilter = [];
    if(data.minPrice) {
      priceFilter.push({price: {[Op.gte]: data.minPrice}});
    }
    if(data.maxPrice) {
      priceFilter.push({price: {[Op.lte]: data.maxPrice}});
    }
    Object.assign(filter, {[Op.and]: priceFilter});

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } 
    catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw {error};
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } 
    catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw {error};
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject
      });
      return flight;
    } 
    catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw {error};
    }
  }

}

module.exports = FlightRepository;