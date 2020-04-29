function smallestCommons(arr) {
  let arr1 = []
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  for (let i = min; i <= max; i++){
    arr1.push(i)
  }
  /*
  Euclidean Algorithm
This algorithm finds GCD by performing repeated division starting from the two numbers we want to find the GCD of until we get a remainder of 0.
  */
  const gcd = (a, b) => {
     if(b == 0){
        return a;
    }
    return gcd(b, a%b);
    }
    // formula LCM(a, b) = (a * b) / (gcd(a, b)
  const lcm = (a, b) => {
    return (a * b) / (gcd(a, b))
  } 
 //test console.log(arr1.reduce(lcm))
 return arr1.reduce(lcm)
 
}
