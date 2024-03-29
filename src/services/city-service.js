const { CityRepository } = require('../repository/index')
// here you are importing from the index.js file of repository
// and here the name HAS TO BE SAME, AS USED THERE WHILE EXPORTING

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({name: filter.name});
      return cities;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } 
    catch (error) {
      console.log("Error occurred in Service Layer");
      throw {error};
    }
  }
}

module.exports = CityService;