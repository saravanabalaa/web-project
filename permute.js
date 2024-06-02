function permute(nums) {
    const result = [];

    const backtrack = (start) => {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap back
        }
    };

    backtrack(0);
    return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(permute(nums));