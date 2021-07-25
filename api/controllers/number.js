const Bingo = require('../data/bingo');
const minimum = Bingo.getMinimun();
const maximum = Bingo.getmaximum();
let listNumber = [];
let uniqueNumber = 0;

exports.generate = async (req,res,next) => {
  try {
    generateNumber(minimum,maximum);
    console.log(uniqueNumber);
    listNumber.push(uniqueNumber);    
    listNumber = listNumber.sort(function(a, b){return a-b});
    console.log(listNumber);
    let result = { newNumber: uniqueNumber, listNumber: listNumber };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

function generateNumber(minimum, maximum) {
  if (listNumber.length >= maximum) throw Error("There is no more numbers available");
  let newNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  if (!listNumber.find(x => x == newNumber)) {
    uniqueNumber = newNumber;
  } else {
    generateNumber(minimum,maximum);
  }
}


