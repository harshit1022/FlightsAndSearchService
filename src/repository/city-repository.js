const { City } = require('../models/index');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ 
        name 
      });
      return city;
    } 
    catch (error) {
      throw {error};
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      });
      return true;
    } 
    catch (error) {
      throw {error};
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Encountered some error in city-repository");
      throw {error};
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } 
    catch (error) {
      console.log("Encountered some error in city-repository");
      throw {error};      
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where : {
          id : cityId
        }
      });
      return city;
    } catch (error) {
      console.log("Encountered some error in city-repository");
      throw {error};      
    }
  }
}

module.exports = CityRepository;
// this is the class name which is exported
// it has to be the same