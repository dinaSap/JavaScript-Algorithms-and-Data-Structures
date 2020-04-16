function truncateString(str, num) {
  if (str.length > num){
    let arr = str.split('').slice(0,num).join('');
    return arr+'...';
  }else{
    return str;
    }
}
