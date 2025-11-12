/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    if (amount === 0) {
        return 0;
    }

    const max = amount + 1;
    const dp = new Array(max).fill(max);
    const path = new Array(max).fill(-1);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                if (1 + dp[i - coin] < dp[i]) {
                    dp[i] = 1 + dp[i - coin];
                    path[i] = coin; 
                }
            }
        }
    }

    if (dp[amount] >= max) {
        return -1;
    }

    const resultCoins = [];
    let currentAmount = amount;


    while (currentAmount > 0) {
        const usedCoin = path[currentAmount];
       if (usedCoin === -1) {
            // Теоретически, этого не должно произойти, если dp[amount] < max
            return 'Ошибка в реконструкции пути';
        }
        currentAmount -= usedCoin;
        resultCoins.push(usedCoin);
    }
    console.log(`Использованные монеты для суммы ${amount}: ${resultCoins.join(', ')}`);
    console.log(`Колличество монет: ${dp[amount]}`)
    console.log(path);
};

coinChange([4, 6, 9, 11], 20);