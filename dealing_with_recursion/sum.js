// Dealing with Recursion: Sum of an Array
// Функция принимает массив чисел и возвращает их сумму, используя рекурсию.

// @param {number[]} arr
// @return {number}
function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    return arr[0] + sum(arr.slice(1, arr.length));
}

console.log(sum([1, 2, 3, 4, 5])); // 15