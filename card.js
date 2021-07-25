const Bingo = require('../data/bingo');
const rules = Bingo.getCardRules();
let listNumber = [];
let listCard = [];

exports.generate = async (req,res,next) => {
  try {
    let card = [];
    let listColumn = [];
    rules.forEach(element => {
      let times = 5;
      listNumber = [];
      letter = element[0,0];
      minimum = element[0,1];
      maximum = element[0,2];
      if (letter == "N") times = 4;
      for (let index = 0; index < times; index++) {
        generateNumber(minimum,maximum);
      }
      listNumber = listNumber.sort(function(a, b){return a-b});
      listNumber.splice(0, 0, letter);
      listColumn.push(listNumber);
    });
    card = { card : listColumn }
    listCard.push(card);
    result = { quantity : listCard.length, list : listCard };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

function generateNumber(minimum, maximum) {
  let newNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  if (!listNumber.find(x => x == newNumber)) {
    listNumber.push(newNumber);
  } else {
    generateNumber(minimum,maximum);
  }
}

