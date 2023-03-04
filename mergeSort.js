const merge = (arr1, arr2) => {
  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return [...result, ...arr1, ...arr2];
}

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  return [...mergeSort(arr.slice(0, mid)), ...mergeSort(arr.slice(mid))];
}


