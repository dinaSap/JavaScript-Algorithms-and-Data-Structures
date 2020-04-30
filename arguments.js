function addTogether() {
  let arg = [...arguments]
  if (arg.every(el=>typeof el === 'number')){
    if (arg.length === 2){
    return arg.reduce((a, b)=> a+b)}
    else {return addTogether.bind(this, arg[0])}
  } 
  }
  /* Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.*/
