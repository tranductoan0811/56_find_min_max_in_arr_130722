function findMax(arr) {
  var max = arr[0];

  for (let i = 0; i <= arr.length-1; i++) {

    if (arr[i] > max) {

        max = arr[i];

    }


  }

  return max;

}