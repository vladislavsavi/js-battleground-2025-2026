
// @param {string[]} strArr
// @return {number} total number of characters in all strings of the array
function count_char(strArr, i = 0) {
    if (i === strArr.length) {
        return 0;
    }

    return strArr[i].length + count_char(strArr, i + 1);
}

console.log(count_char(['ab', 'c', 'def', 'ghij'])); // 10
