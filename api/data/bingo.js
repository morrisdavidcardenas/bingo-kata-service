
const minimum = 1;
const maximum = 75;
let cardRules = [];

function getMinimun() {
  return minimum;
}

function getmaximum() {
  return maximum;
}

function getCardRules(){
  cardRules.push(["B",1,15]);
  cardRules.push(["I",16,30]);
  cardRules.push(["N", 31,45]);    
  cardRules.push(["G", 46,60]);
  cardRules.push(["O", 61,75]);    
  return cardRules;
}

module.exports = {
  getMinimun: getMinimun,
  getmaximum: getmaximum,
  getCardRules: getCardRules,
};
