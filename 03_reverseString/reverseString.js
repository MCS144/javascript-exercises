const reverseString = function(str) {
let splitString = str.split(""); //using split method to return a new array
let reverseArray = splitString.reverse(); //reverse method to reverse the new array
let joinArray = reverseArray.join(""); //join method to join them back together

return joinArray; //return the reversed string
};

// Do not edit below this line
module.exports = reverseString;
