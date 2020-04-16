function titleCase(str) {
let newStr = str.toLowerCase().split(' ').map(each=>each.replace(each[0], each[0].toUpperCase())).join(' ');
console.log(newStr);
return newStr;
}

titleCase("I'm a little tea pot");
