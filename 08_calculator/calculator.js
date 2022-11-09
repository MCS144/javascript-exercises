const add = function(a,b) {
  return  a + b;
  
	
};

const subtract = function(a1,b1) {
  return a1 - b1;
  
	
};

const sum = function(sum1) {
	return sum1.reduce((first, second) => first + second, 0);
};

const multiply = function(mult) {
 return mult.length 
 ? mult.reduce((first, second)=> first * second,) : 0;
};

const power = function(p1,p2) {
return Math.pow(p1, p2)	

};

const factorial = function(num) {
  if (num < 0)
  return -1;
  else if (num == 0)
  return 1;
  else{
    return (num *factorial(num-1));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
