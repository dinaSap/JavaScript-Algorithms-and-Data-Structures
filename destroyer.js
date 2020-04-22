function destroyer(arr) {
  let a = [...arguments]
  let b = a.shift()
  return b.filter(i => !a.includes(i))
  
}
