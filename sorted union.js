function uniteUnique(arr) {
  let newArr = [...arguments].flat().filter((v, i, a) => a.indexOf(v) === i)
  return newArr;
}
