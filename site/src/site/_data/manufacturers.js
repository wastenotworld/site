const getManufacturers = require("../../utils/getManufacturers");

module.exports =  async function() {
  return await getManufacturers()
}