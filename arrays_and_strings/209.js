// Однородные массивы
// Однородный массив — массив состоящий из элементов одного типа (например, только строки или только числа).

// Реализуйте функцию filterHomogenous, которая принимает массив массивов и возвращает массив непустых гомогенных массивов.

function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.every(i => typeof i === typeof arr[0]) && arr.length);
}

console.log(filterHomogenous([
  [1, 2, 3],
  [],
  [5, true, 8],
  ["qwe", "yyy"],
  ["uio", 6],
])); // [[1, 2, 3],  ["qwe", "yyy"]]
