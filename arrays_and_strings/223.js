// Проверка на палиндром
// Палиндром — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.

// Реализуйте функцию isPalindrome, принимающую строку и проверяющую, что она является палиндром. 
// При проверке на палиндром нужно учитывать только латинские (A-Z) и кириллические (А-Я) буквы и цифры (0-9) без учета регистра.

function isPalindrome(sentence) {
    const normalized = sentence.toLowerCase().replace(/[^a-z0-9а-яё]/gi, '');
    const len = normalized.length;
    let leftIndex = 0;
    let rightIndex = len - 1;

    while (leftIndex < rightIndex) {
        if (normalized[leftIndex] !== normalized[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    
    return true;
}


console.log(isPalindrome("madam"));
console.log(isPalindrome("02/02/2020"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("Аргентина манит негра"));
console.log(isPalindrome("Лёша на полке клопа нашёл"));
console.log(isPalindrome("Sum summus mus"));
