function binaryAgent(str) {
  let str1 = str.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  return str1;
}
