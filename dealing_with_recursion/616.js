// Перестановки
// Дана строка s, в которой нет повторяющихся символов.

// Верните массив со всеми возможными перестановками символов в строке s. Порядок значения не имеет.


function permutations(str) {
    if (str === "") {
        return [""];
    }
    const results = [];

    for (let i = 0; i < str.length; i++) {
        const variants = permutations(str.replace(str[i], ''))
        const variantsWithChr = variants.map((str1) => str[i] + str1);
        results.push(...variantsWithChr);
    };

    return results;
}


console.log(permutations("ABC"));
// ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
