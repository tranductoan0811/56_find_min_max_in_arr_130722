function findMin(arr) {
  var min = arr[0];

  for (let i = 0; i <= arr.length-1; i++) {

    if (arr[i] < min) {

        min = arr[i];

    }


  }

  return min;

}