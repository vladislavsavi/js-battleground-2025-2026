// Два максимальных УНИКАЛЬНЫХ числа
// Дан массив с числами. Верните два наибольших числа из этого массива. Гарантируется, что в массиве находятся хотя бы два различных элемента.

function twoMaxNumbers(numbers) {
    let max1 = -Infinity;
    let max2 = -Infinity;

    for (const num of numbers) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num < max1 && num > max2) {
            max2 = num
        }
    }

    return [max1, max2];
}