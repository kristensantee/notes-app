// Exports function to generate a string of random numbers and letters for the unique ID
module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(7)
        .substring(1);