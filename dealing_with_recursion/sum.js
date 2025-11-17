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



// by https://github.com/GulievAnar31
function sum_1(arr, i) {
    if(i === arr.length - 1) {
        return arr[i];
    }

    return arr[i] + sum_1(arr, i + 1);
}

// by https://github.com/GulievAnar31
function sum_2(arr) {
    const helper = (i) => {
        if(i === arr.length - 1) {
            return arr[i];
        }

        return arr[i] + helper(i + 1);
    }

    return helper(0);
}

console.log(sum_2([1, 2, 3, 4, 5], )); // 15