const binarySearch = function(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (value === arr[mid]) {
      return mid;
    } else if (value < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    };
  };
};

let myList = [0, 1, 2, 4, 6, 8, 9, 11];

console.log(binarySearch(myList, 4));
console.log(binarySearch(myList, 7));
