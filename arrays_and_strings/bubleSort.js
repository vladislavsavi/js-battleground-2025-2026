function bubleSort(arr) {
    let swapped = false;

    for (let i = 0; i < arr.length; i++) {
        swapped = false
        for (let j = 0; j < arr.length - i; j++) {
            const next_j = j+1; 
            if (arr[j] > arr[next_j]) {
                const tmp = arr[next_j];
                arr[next_j] = arr[j];
                arr[j] = tmp;
                swapped = true
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

console.log(bubleSort([3,2,1,10,2,3,45,21]));