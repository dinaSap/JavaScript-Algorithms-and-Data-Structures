function sumFibs(num) {
 let arr = [1]
 
 if (num == 1){
   return 1
 } else {
   arr.push(1)
   let prev = arr[arr.length-2]
   let last = arr[arr.length-1]
   let sum = prev +last
   while (sum <= num){
     arr.push(sum)
  prev = arr[arr.length-2]
  last = arr[arr.length-1]
  sum = prev +last
   }
 }
 arr = arr.filter(el => el % 2 !== 0).reduce((a, b) => a+b)
 return arr;
}
