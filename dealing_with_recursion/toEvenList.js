
function toEvenList(arr, i = 0) {
    if (arr.length === i) {
        return [];
    }

    const nextEvens = toEvenList(arr, i + 1);

    if (arr[i] % 2 === 0) {
        return [arr[i], ...nextEvens];
    } else {
        return nextEvens;
    }
}


console.log(toEvenList([1, 2, 3, 4, 5, 6, 7, 8])); // [2,4,6,8]
