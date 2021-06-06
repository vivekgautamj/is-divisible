const isDivisibleBy3 = function (number) {
    try {
        if(typeof number !== "number" )
        throw "not a number";
        return number % 3 === 0 ? true : false
    } catch (e) {
        console.log("Param is not a number")
    }
}

module.exports.isDivisibleBy3 = isDivisibleBy3;