function partition(arr, low, high) {
    const pivot = arr[high];
    const pivot_index = high;
    let left_index = low;
    let right_index = high - 1;

    while (true) {
        while (arr[left_index] < pivot && left_index <= high) {
            left_index++;
        }
        
        while (arr[right_index] > pivot && right_index >= low) {
            right_index--;
        }

        if (left_index >= right_index) {
            break;
        } else {
            [arr[left_index], arr[right_index]] = [arr[right_index], arr[left_index]];
            left_index++;
        }
    }

    [arr[left_index], arr[pivot_index]] = [arr[pivot_index], arr[left_index]];

    return left_index;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivot_index = partition(arr, low, high);
        quickSort(arr, low, pivot_index - 1);
        quickSort(arr, pivot_index + 1, high);
    }
    return arr;
}

function quickSelect(arr, k, low = 0, high = arr.length - 1) {
    if (high  - low <= 0) {
        return arr[low];
    }

    const pivot_index = partition(arr, low, high);

    if (pivot_index === k) {
        return arr[pivot_index];
    } else if (pivot_index < k) {
        return quickSelect(arr, k, pivot_index + 1, high);
    } else {
        return quickSelect(arr, k, low, pivot_index - 1);
    }
}

console.log(quickSelect([3,6,8,10,1,2], 1));

console.log(quickSort([3,6,8,10,1,2,1]));