function kidsWithCandies(candies, extraCandies) {
    // Find the maximum number of candies that any kid currently has
    const maxCandies = Math.max(...candies);

    // Create the result array
    const result = candies.map(candy => candy + extraCandies >= maxCandies);

    return result;
}

// Example usage
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies)); // Output: [true, true, true, false, true]