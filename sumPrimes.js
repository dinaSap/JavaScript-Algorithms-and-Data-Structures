function sumPrimes(num) {
  let arr = []
  for (let i = 2; i <= num; i++) {
    arr.push(i);
}
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) {return false};
  return true;
}
  arr = arr.filter(el => isPrime(el)).reduce((a, b) => a+b)
  
return arr;
}
