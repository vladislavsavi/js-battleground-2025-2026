//  Coin Change Problem
// Функция принимает массив монет и сумму, возвращает минимальное количество монет для этой суммы или -1, если сумма недостижима.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    coins.forEach(coin => {
        for (let x = coin; x <= amount; x++) {
            dp[x] = Math.min(dp[x], dp[x - coin] + 1);
        }
    });
    
    const result = dp[amount];
    if (result === Infinity) {
        console.log(-1);
        return -1;
    } else {
        return result;
    }
};

console.log(coinChange([1, 3, 4], 6));