function simpleBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function optimizedBubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function furtherOptimizedBubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped)
  return arr;
}
console.log('fast')
console.time("Function Execution");
console.log(furtherOptimizedBubbleSort([3, 4, 1, 5, 2]));
console.timeEnd("Function Execution");

console.log('simple')
console.time("Function Execution");
console.log(simpleBubbleSort([3, 4, 1, 5, 2]));
console.timeEnd("Function Execution");

console.log('mid')
console.time("Function Execution");
console.log(optimizedBubbleSort([3, 4, 1, 5, 2]));
console.timeEnd("Function Execution");



