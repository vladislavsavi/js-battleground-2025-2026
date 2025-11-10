// Аналоговые часы
// Дано время в формате цифровых часов. Например, "15:00". Гарантируется, что время корректное, указаны часы и минуты.

// Определите, сколько градусов между стрелками на аналоговых часах, которые показывают это время. Ответом является число от 0 до 180.

function clockAngle(time) {
    let [h, m] = time.split(':').map(Number);


    if (h > 12) {
        h = h - 12;
    } else if (h === 0) {
        h = 12;
    }

    const mDeg = m * (360/60);
    const hDeg = (h * (360/12)) + (m * (360/12/60))

    const diffDeg = Math.abs(hDeg - mDeg); 
    return Math.min(diffDeg, 360 - diffDeg);
}

console.log(clockAngle("15:00")); // 90