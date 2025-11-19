// Efficient Fibonacci using memoization
// Фибоначчи с мемоизацией

function fib(n, memo = {}) {
    if (n === 0 || n === 1) {
        return n;
    }

    if (!memo[n]) {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }

    return memo[n];     
}

console.log(fib(1000));
