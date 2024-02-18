// Define a function named find_Factors that returns an array of factors for a given number num
function find_Factors(num) {
    // Initialize an empty array factors to store the factors
    let factors = [];

    // Loop through all numbers from 1 to num/2 and check if they are a divisor
    for (let i = 1; i <= num / 2; i++) {
        // Check if i is a factor of num
        if (num % i === 0) {
            // If true, push i to the factors array
            factors.push(i);
        }
    }

    // Add num as a factor
    factors.push(num);

    // Return the array of factors
    return factors;
}

// Log the result of calling find_Factors with the input number 15 to the console
console.log(find_Factors(15));

// Log the result of calling find_Factors with the input number 16 to the console
console.log(find_Factors(16));

// Log the result of calling find_Factors with the input number 17 to the console
console.log(find_Factors(17));   
