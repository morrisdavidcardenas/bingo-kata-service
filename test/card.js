let listNumber = [];

const generateNumber = (minimum, maximum) => {
  let newNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  if (!listNumber.find(x => x == newNumber)) {
    listNumber.push(newNumber);
    return newNumber;
  } else {
    generateNumber(minimum,maximum);
  }
}

module.exports = generateNumber;
