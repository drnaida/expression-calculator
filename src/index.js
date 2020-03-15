function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr = expr.split('');
    let leftItem = 0;
    let rightItem = 0;
    arr.forEach(function(element, index, array) {
        console.log(element);
        if (element === '+') {
         leftItem = expr.slice(0, index);
         rightItem = expr.slice(index+1);
         let sumResult = Number(leftItem) + Number(rightItem);
         console.log(sumResult);
        }
        if (element === '-') {
         leftItem = expr.slice(0, index);
         rightItem = expr.slice(index+1);
         let subResult = Number(leftItem) - Number(rightItem);
         console.log(subResult);
        }
    });
}


module.exports = {
    expressionCalculator
}
