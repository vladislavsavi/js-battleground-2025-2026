// Самое короткое слово
// Напишите функцию, которая принимает предложение, состоящее из слов, разделенных пробелами, и возвращает длину самого короткого слова.

function shortestWord(str) {
    const strArr = str.split(' ');
    let shortestWord = strArr[0];

    for (const word of strArr) {
        if (shortestWord?.length > word.length) {
            shortestWord = word;
        } 
    }

    return shortestWord.length
}


console.log(shortestWord('lorem ipsum dolor sit amet'))