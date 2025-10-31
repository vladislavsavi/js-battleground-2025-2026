// Рост населения
// Население может увеличиваться за счет естественного прироста или за счет иммиграции.

// Естественный прирост задается в процентах в год. Например, число 5 означает, что население растет естественный путем на 5% в год. Например, если было 133 человека, то естественным путем через год их станет 139.

// Миграция задается в абсолютных числах. Например, число 23 означает, что произойдет изменение на 23 человека в год. Например, если было 133 человека, то за счет миграции через год их станет 156.

// Функция yearsToTarget должна определять, за сколько лет будет достигнуто целевое значение населения.

function yearsToTarget(
  initialPopulation,
  naturalIncrease,
  immigration,
  targetPopulation,
) {
    let currentPopulation = initialPopulation;
    let yearsCount = 0;

    while (currentPopulation < targetPopulation) {
        const naturalGrowth = Math.floor(currentPopulation * (naturalIncrease/100));
        currentPopulation = currentPopulation + naturalGrowth + immigration;
        yearsCount++;
    }

    return yearsCount;
}