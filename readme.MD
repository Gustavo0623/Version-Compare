# Simple Version Compare
This is a simple solution to compare two version strings. The function takes in two arguments, version1 and version2, and returns 1 if version1 is greater, -1 if version2 is greater, and 0 if they are equal.

## How it works
* The function first converts the input versions to arrays by splitting them at each period.
* It then checks for any potential missing values in the arrays and replaces them with '0'
* The function then checks for any differences in the array lengths and expands the shorter array to make them equal by pushing '0' values to the array.
* The function then equalizes the values of each index of the arrays by adding filler '0's
* The function then compares each index of both arrays and sets the return value accordingly and breaks the loop if not equal
* The function then returns the updated return value

## Example
console.log(VersionCompare('2.1.1', '2.001000.1.0')) 
// expected return = 1

console.log(VersionCompare('2.0001.1', '2.001000.'))
// expected return = -1

console.log(VersionCompare('2', '2.00000.0.0'))
// expected return = 0