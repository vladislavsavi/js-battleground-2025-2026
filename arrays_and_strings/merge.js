

function merge(arr1, arr2) {
    let arr1_index = 0;
    let arr2_index = 0;
    const arr_result = [];

    while (arr1_index < arr1.length && arr2_index < arr2.length) {
        if (arr1[arr1_index] < arr2[arr2_index]) {
            arr_result.push(arr1[arr1_index++]);
        } else {
            arr_result.push(arr2[arr2_index++]);
        }
    }

    while (arr1_index < arr1.length) {
        arr_result.push(arr1[arr1_index++]);
    }

     while (arr2_index < arr2.length) {
        arr_result.push(arr2[arr2_index++]);
    }

    return arr_result;
}


console.log(merge([0, 1, 4], [3,4,5]));
