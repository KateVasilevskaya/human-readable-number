module.exports = function toReadable(number) {
    let ones = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
    ]);

    let tens = new Map([
        [1, "ten"],
        [2, "twenty"],
        [3, "thirty"],
        [4, "forty"],
        [5, "fifty"],
        [6, "sixty"],
        [7, "seventy"],
        [8, "eighty"],
        [9, "ninety"],
    ]);

    let hundrends = new Map([
        [1, "one hundred"],
        [2, "two hundred"],
        [3, "three hundred"],
        [4, "four hundred"],
        [5, "five hundred"],
        [6, "six hundred"],
        [7, "seven hundred"],
        [8, "eight hundred"],
        [9, "nine hundred"],
    ]);

    if (number < 20) {
        return ones.get(number);
    }

    let numStr = number.toString(); // String(number);
    if (numStr.length > 1) {
        let arrayOfDigits = Array.from(numStr, Number);

        // 20, 23
        if (arrayOfDigits.length === 2) {
            let firstNum = arrayOfDigits.at(0);
            let secondNum = arrayOfDigits.at(1);

            let first = tens.get(firstNum);
            let second = ones.get(secondNum);

            //       true -> first
            //       false -> first + " " + second
            return secondNum === 0 ? first : first + " " + second;
        }

        if (arrayOfDigits.length === 3) {
            let firstNum = arrayOfDigits.at(0);
            let secondNum = arrayOfDigits.at(1);
            let thirdNum = arrayOfDigits.at(2);

            let first = hundrends.get(firstNum);
            let second = tens.get(secondNum);
            let third = ones.get(thirdNum);
            let forth = ones.get(
                Number(secondNum.toString().concat(thirdNum.toString())) // "1".concat("1") -> "11"
            );

            // 100, 101, 110, 111, 145
            return secondNum === 0 && thirdNum === 0
                ? first
                : secondNum === 0 && thirdNum != 0
                ? first + " " + third
                : secondNum != 0 && thirdNum === 0
                ? first + " " + second
                : secondNum === 1
                ? first + " " + forth
                : first + " " + second + " " + third;
        }
    }
};
