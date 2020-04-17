function mutation(arr) {
  const first = arr[0].toLowerCase().split('');
  const second = arr[1].toLowerCase().split('');
  return second.every(elem => first.includes(elem));
}
