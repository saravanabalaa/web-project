function findMin(arrivals, departures) {
    // Sort both arrays
    arrivals.sort((x, y) => x - y);
    departures.sort((x, y) => x - y);

    // Initialize pointers for arrival and departure arrays
    let arrPointer = 0;
    let depPointer = 0;

    // Initialize variables to store current platforms needed and maximum platforms needed
    let platformsNeeded = 0;
    let maxPlatforms = 0;

    // Traverse through all arrival and departure times
    while (arrPointer < arrivals.length && depPointer < departures.length) {
        // If arrival time is less than or equal to departure time, increment platform count
        if (arrivals[arrPointer] <= departures[depPointer]) {
            platformsNeeded++;
            arrPointer++;
        } else {
            // Else, decrement platform count and move to the next departure
            platformsNeeded--;
            depPointer++;
        }

        // Update the maximum platforms needed
        maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
    }

    return maxPlatforms;
}

// Example usage
let arrivals = [930, 1100, 900, 1500, 1030, 1200, 1400, 1600, 950, 1300];
let departures = [945, 1130, 910, 1900, 1120, 1230, 1500, 1630, 1120, 1330];

console.log(findMinPlatforms(arrivals, departures));  // Output: 3