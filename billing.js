
var x = 0.025;

var y = 100000;

function billed_amount (transactionCharge, amountTendered){
var billedAmount = amountTendered-(transactionCharge * amountTendered);
return "This is the billed amount:" + billedAmount;

}
console.log(billed_amount (x, y));
