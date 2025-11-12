// Decode RLE
// Реализуйте функцию decodeRLE, которая распаковывает сжатую строку, сжатую алгоритмом RLE.

function decodeRLE(str) {
    const regexp = /(?<char>[a-z])(?<count>\d*)/g;
    const match = str.matchAll(regexp);

    let result = '';
    Array.from(match).map((i) => {
        const {char, count} = i.groups;
        console.log(char, count);
        if (count) {
             result = result + char.repeat(count);
        } else {
             result = result + char;
        }
    });
    return result;
}

decodeRLE("a4b6c")