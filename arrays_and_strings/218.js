// Импортозамещение дат
// Во входной строке замените все даты в американском формате MM/DD/YYYY на отечественный формат DD.MM.YYYY.

function changeDateFormat(str) {
    return str.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$2.$1.$3');
}


const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
// "World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.";
