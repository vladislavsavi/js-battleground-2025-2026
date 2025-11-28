// Function to calculate the number of distinct ways to climb a staircase of n steps
//  Функция принимает число n и возвращает количество способов добраться до вершины,
//  если можно подниматься на 1, 2 или 3 шага за раз.

function numberOfPaths(n, memo = {}) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    memo[n] = memo[n] || numberOfPaths(n - 1, memo) + numberOfPaths(n - 2, memo) + numberOfPaths(n - 3, memo);
    return memo[n] ;
}

console.log(numberOfPaths(10)); // 4