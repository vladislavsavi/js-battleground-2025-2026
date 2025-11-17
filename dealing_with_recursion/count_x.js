
function count_x(str) {
    if (str.length === 0) {
        return 0;
    }
    
    if (str[0] === 'x') {
        return 1 + count_x(str.slice(1));
    } else {
        return count_x(str.slice(1));
    }
}

console.log(count_x('axbxcx'));
