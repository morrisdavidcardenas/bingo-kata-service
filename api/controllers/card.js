const Number = require('./number');
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

exports.check = async (req,res,next) => {
  try {
    let message = "";
    let bingoListNumber = [];    
    let bingoNumber = [];
    list = Number.getList();
    flagWinner = false;
    listCard.forEach(card => {
      bingoNumber = [];
      card.card.forEach(element => {
        console.log(element[0,1]);
        //Letter B
        bingoNumber.push(element[0,1]);
        bingoNumber.push(element[0,2]);         
        bingoNumber.push(element[0,3]);         
        bingoNumber.push(element[0,4]);    
        if (element[0] != "N") {
          bingoNumber.push(element[0,5]);         
        }
      });
      bingoListNumber.push(bingoNumber);        
    });
    console.log(bingoListNumber);
    let matches = 0;
    bingoListNumber.forEach(bingo => {
      bingo.forEach(element => {
        if (!list.find(x=> x == element)) {
          return;
        } else {
          matches = matches + 1;
        }
      });
      if (matches == 24) {
        flagWinner = true;
        return;
      }
    });
    if (flagWinner) {
      message = "the player is the winner";
    } else {
      message = "the player is not the winner";
    }
    res.status(200).json(message);
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

