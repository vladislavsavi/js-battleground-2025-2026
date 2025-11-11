// Форматирование цены
// Дано положительное целое число — цена товара. Верните строку с отформатированной ценой: цифры
//  справа налево должны быть сгруппированы по три, а группы отделены друг от друга пробелами.


function formatPrice(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

console.log(formatPrice(100)); // "100"
console.log(formatPrice(2000)); // "2 000"
console.log(formatPrice(345678)); // "345 678"
console.log(formatPrice(1000000)); // "1 000 000"
console.log(formatPrice(1234567890)); // "1 234 567 890"
