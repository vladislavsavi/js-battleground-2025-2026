// Pivot Index
// Дан массив чисел. Необходимо найти индекс элемента такого, что сумма чисел слева от него равна сумме чисел справа от него. Если такого элемента нет, вернуть -1.

// Если таких индексов несколько, вернуть минимальный.


function pivotIndex(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);

    let leftSumm = 0
    for (let index = 0; index < arr.length; index++) {
        const rightSum = totalSum -leftSumm - arr[index];

        if (rightSum === leftSumm) {
            return index
        }
        leftSumm += arr[index];
    }

    return -1;
}

const arr2 = [4, 2, -5, 3];

console.log(pivotIndex(arr2));
