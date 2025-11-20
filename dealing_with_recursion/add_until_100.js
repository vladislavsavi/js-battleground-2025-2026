// @param {number[]} nums - An array of numbers to be summed
// @returns {number} - The sum of the numbers until the sum reaches or exceeds 100
function add_until_100(nums, i = 0) {
    if (nums.length === i) {
        return 0;
    }

    const currentCalc = add_until_100(nums, i + 1);

    if (currentCalc + currentCalc > 100) {
        return currentCalc;
    } else {
        return nums[i] + currentCalc;
    }
}

console.log(add_until_100([1,2,3,4]));
