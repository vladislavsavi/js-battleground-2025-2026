// Длина плейлиста
// В формате массива пар задается плейлист. Пара состоит из песни и ее продолжительности. Например:

const innuendo = [
  ["Innuendo", "6:31"],
  ["I'm Going Slightly Mad", "4:22"],
  ["Headlong", "4:38"],
  ["I Can't Live with You", "4:33"],
  ["Don't Try So Hard", "3:39"],
  ["Ride the Wild Wind", "4:42"],
  ["All God's People", "4:21"],
  ["These Are the Days of Our Lives", "4:15"],
  ["Delilah", "3:35"],
  ["The Hitman", "4:56"],
  ["Bijou", "3:36"],
  ["The Show Must Go On", "4:35"],
];

function playlistDuration(playlist) {
    let secondsProduct = 0;
    let minuteProduct = 0;
    let hoursProduct = 0;
    for (const pair of playlist) {
        const [_, time] = pair;
        const timeArr = time.split(':');
        let seconds = timeArr.at(-1);
        let minutes = timeArr.at(-2);
        let hours = timeArr.at(-3);

        if (seconds) {secondsProduct += +seconds}
        if (minutes) {minuteProduct += +minutes}
        if (hours) {hoursProduct += +hours}
    }

    if (secondsProduct >= 60) {
        const remainder = secondsProduct % 60;
        minuteProduct += Math.floor(secondsProduct / 60);
        secondsProduct = Math.floor(remainder);

    }

    if (minuteProduct >= 60) {
        const remainder = minuteProduct % 60;
        hoursProduct += Math.floor(minuteProduct / 60);
        minuteProduct = Math.floor(remainder);
    }
    
    let result = '';

    if (hoursProduct > 0) {
        result += String(hoursProduct).padStart(2, '0') + ':';
    }

    result += String(minuteProduct).padStart(2, '0') + ':';

    result += String(secondsProduct).padStart(2, '0');
    
    return result;
}


console.log(playlistDuration(innuendo)); // "53:43"