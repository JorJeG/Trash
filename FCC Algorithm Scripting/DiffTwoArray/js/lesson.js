function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr.push(...arr1);
  for(let i = 0; i < arr2.length; i++) {
    newArr = newArr.filter(x => x != arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) newArr.push(arr2[i]);
  }
  return newArr;
}
