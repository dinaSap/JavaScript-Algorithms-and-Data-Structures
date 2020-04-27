function sumPrimes(num) {
  let arr = []
  
  const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) {return false};
  return true;
}
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)){
    arr.push(i);}
}
  arr = arr.reduce((a, b) => a+b)
  
return arr;
}
