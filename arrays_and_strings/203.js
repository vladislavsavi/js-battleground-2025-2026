// Реализуйте функцию max, которая принимает массив чисел и возвращает максимальное число в этом массиве

function max(numbers) {
  let maxValue = numbers[0];

  for (const num of numbers) {
    if( maxValue < num) {
        maxValue = num;
    }
  }

  return maxValue;
}


console.log(max([3, 6, 1, 5]));