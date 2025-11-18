function max(arr, i = 0) {
    if (i === arr.length) {
        return -Infinity;
    }

    const current = arr[i];
    const next = max(arr, i + 1);

    return current > next ? current : next;
}

console.log(max([1, 3, 2, 8, 5, 4])); // 8