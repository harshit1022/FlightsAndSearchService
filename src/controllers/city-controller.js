const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data : city,
      success : true,
      message : "Successfully Created City",
      err : {}
    });
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : "Error in Creating City",
      err : error
    });
  }  
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id); // becoz of DELETE -> /city/:id
    return res.status(200).json({
      data : response,
      success : true,
      message : "Deleted City Successfully!",
      err : {}
    });
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : "Not able to Delete City",
      err : error
    });
  }  
}

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id); 
    return res.status(200).json({
      data : response,
      success : true,
      message : "Fetched City Successfully!",
      err : {}
    });
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : "Not able to Get City",
      err : error
    });
  }    
}

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAllCities(req.query); 
    return res.status(200).json({
      data : response,
      success : true,
      message : "Fetched Cities Successfully!",
      err : {}
    });
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : "Not able to Get All Cities",
      err : error
    });
  }    
}


// UPDATE => /city/:id  || Parameters in req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body); // becoz of DELETE -> /city/:id
    return res.status(200).json({
      data : response,
      success : true,
      message : "Updated City Successfully!",
      err : {}
    });
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data : {},
      success : false,
      message : "Not able to Update City",
      err : error
    });
  }  
}

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll
}