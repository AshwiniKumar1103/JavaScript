const arr = new Array(1, 5, 4, 2, 8, 7, 6, 9);
for (let i = 0; i < arr.length ; i++) {
  for (j = 0; j <i; j++) {
        if (arr[i] < arr[j]) {
            let data = arr[j];
            arr[j] = arr[i];
            arr[i] = data;
          }
  }
}
console.log(arr);
