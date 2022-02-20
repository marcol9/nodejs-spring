// Dont use for loops because:
// overly verbose
// error prone(index out of bounds)
// is not functional

// wee need to try use map,filter when possible

const carBatteries = [0.2323, 0.3232, 0.5454, 0.6565];

const chargedCarBatteries = [];

carBatteries.forEach((element) => {
  //wrong
  element = element + 0.4;
  chargedCarBatteries.push(element);
});

const chargedCarBtteriesRight = carBatteries.map((battery) => battery + 0.4); //right

carBatteries.forEach((battery, index) => {
  index++;
  console.log("you go in charger " + index);
});

const drainedBatteries = carBatteries.filter((battery) => {
  if (battery < 0.5) {
    return battery;
  }
});
console.log(drainedBatteries);
