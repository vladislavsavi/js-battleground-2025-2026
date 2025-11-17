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
        const variantsWithChr = variants.map((variant) => str[i] + variant);
        results.push(...variantsWithChr);
    };

    return results;
}

function permutations_1(str) {
    if (str.length === 1) { 
        return str[0];
    }

    const results = [];
    let substringsAnagrams = permutations_1(str.slice(1));
    console.log(substringsAnagrams);
    
    for (let i = 0; i < substringsAnagrams.length; i++) {
        for (let j = 0; j <= substringsAnagrams[i].length; j++) {
            const newAnagram = substringsAnagrams[i].slice(0, j) + str[0] + substringsAnagrams[i].slice(j);
            results.push(newAnagram);
        }
    }

    return results;
}


console.log(permutations_1("ABC"));
// ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
