// Code your solution in this file!
// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that takes a multiplier and returns a function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function that takes an array of drivers and a function, and applies the function to the array
const selectDifferentDrivers = function(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
};
