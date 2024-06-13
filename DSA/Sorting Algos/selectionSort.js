function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    //store the first element as min
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      //compare min to next item until new min
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    //if min is not initial min, swap
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    //repeat until arr is sorted
  }
  return arr;
}

console.log(selection([5, 1, 3, 2, 4]));

