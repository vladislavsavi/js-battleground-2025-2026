// Лотерейный билет
// Лотерейный билет представляет из себя двумерный массив, где каждый из подмассивов состоит из двух частей:

// комбинация букв произвольной длины;
// какое-то число.
// Необходимо посчитать количество выигрышных комбинаций.
// Комбинация считается выигрышной, если код одного из символов в строке равен числу. Код символа — код из таблицы ASCII.

function bingo(ticket) {
    let cout = 0;
    for (const pair of ticket) {
        const [symbols, num] = pair;

        // let bingo = false;
        
        // for (let index = 0; index < symbols.length; index++) {
        //     if (symbols.codePointAt(index) === num) {
        //         cout++;
        //         break;
        //     }
        // }
        
        const isWining = Array.from(symbols).some((char => char.charCodeAt(0) === num));

        if (isWining) {
            cout ++;
        }
    }

    return cout;
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 89]])); // 2 