const removeFromArray = function(...args) {

    const arrayWithout = args[0]
    return arrayWithout.filter(val => !args.includes(val))
 
}


// Do not edit below this line
module.exports = removeFromArray;
