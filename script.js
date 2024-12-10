const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        // Check if adding the current number exceeds the maximum sum
        if (currentSum + num > n) {
            // Push the current subarray to the result and reset
            result.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }
        // Add the current number to the subarray
        currentSubarray.push(num);
        currentSum += num;
    }

    // Add the last subarray if not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
