// Write a recursive function to reverse a string.
// Функция принимает строку и возвращает её в обратном порядке.

function reverese(str) {
    if (str.length === 0) {
        return "";
    }
    return reverese(str.slice(1)) + str[0];
}

function reverese_1(str, i = 0) {
    if (i === str.length - 1) {
        return str[i];
    }
    return reverese_1(str, i + 1) + str[i];
}

function reverese_2(str) {
    const helper = (i) => {
        if (i === str.length - 1) {
            return str[i];
        }
        return helper(i + 1) + str[i];
    }
    return helper(0);
}

let word = "hello";
console.log(reverese(word));
console.log(reverese_1(word));
console.log(reverese_2(word));
console.log(word);

