const getListings = require("../../utils/getListings");

module.exports =  async function() {
  return await getListings(1)
}