// Дан массив с массивами строк matrix и минимальное значение min.

// Определите, есть ли в этом массиве хотя бы одна строка длины не меньшее min.


const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

function searchValue(matrix, min) {
    // return matrix.flat().some(word => word.length >= min);
    for (const arr of matrix) {
        for (const word of arr) {
            if (word.length >= min) {
                return true;
            }
        }
    }
    return false;
}

console.log(searchValue(matrix, 6)); // true
console.log(searchValue(matrix, 11)); // true
console.log(searchValue(matrix, 200)); // false