const squareList = (arr) => {
  // Only change code below this line
  return arr.filter(each => each > 0 && Number.isInteger(each)).map(each => each ** 2);
  // Only change code above this line
};
