const { favourite, secondKey } = require("./animals.json");

function noOfFavAnimals() {
  return favourite.length;
}

module.exports = {
  calculateFavAnimals: noOfFavAnimals,
};
