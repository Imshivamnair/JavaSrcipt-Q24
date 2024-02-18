// Define a function named factors that returns an array of factors for a given number n
function factors(n) {
    // Initialize an empty array num_factors to store the factors
    var num_factors = [], i;

    // Iterate through numbers from 1 to the square root of n to find factors
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        // Check if i is a factor of n
        if (n % i === 0) {
            // Push i to the factors array
            num_factors.push(i);

            // Check if n divided by i is not equal to i (avoid duplication for perfect squares)
            if (n / i !== i)
                // Push n divided by i to the factors array
                num_factors.push(n / i);
        }
    }

    // Sort the factors array in ascending order using a numeric sort
    num_factors.sort(function (x, y) {
        return x - y;
    });

    // Return the sorted array of factors
    return num_factors;
}

// Log the result of calling factors with the input number 15 to the console
console.log(factors(15));  // [1,3,5,15] 

// Log the result of calling factors with the input number 16 to the console
console.log(factors(16));  // [1,2,4,8,16] 

// Log the result of calling factors with the input number 17 to the console
console.log(factors(17));  // [1,17] 
