//binary calculator (whole numbers)
//input binary, binary
//output value
function binaryCal(bin1, bin2, operator) {
    bin1 = convertBinary(bin1);
    bin2 = convertBinary(bin2);

    if(operator === "/"){
        return convertDecimal(Math.round(bin1 / bin2));
    } else if(operator === "+"){
        return convertDecimal(bin1 + bin2);
    } else if(operator === "*"){
        return convertDecimal(bin1 * bin2);
    } else if (operator === "-"){
        return convertDecimal(bin1 - bin2);
    } else {
        console.log("operator not supported");
    }

}

function convertBinary(bin) {
    let output = 0;
    bin.toString().split("").reverse().forEach((char, index) => {
        if(char === "1") output += Math.pow(2, index);
    });
    return output;
}

function convertDecimal(value) {
    let dividedBy = 0;
    let power = 0;
    let output = "";

    while(value > dividedBy){
        dividedBy = Math.pow(2, power);
        power ++;
    }
    let maxPower = power - 2;
    power = maxPower;
    dividedBy = Math.pow(2, maxPower);
    for(let i = maxPower; i >= 0; i--) {
        if(Math.pow(2, power) <= value){
            value = value % Math.pow(2, power);
            output += "1";
        } else {
            output += "0";
        }
        power--;
    }
    return output;
}

console.log(binaryCal(10101010,11001100, "+"));
