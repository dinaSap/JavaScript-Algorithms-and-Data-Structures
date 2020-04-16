function confirmEnding(str, target) {

  if(str.match(target+'$')){
    return true;
  }else{
    return false;
  }
}
