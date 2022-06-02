"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );

// calulate future value on yearly basis
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
}

//Future value calculation on monthly basis
let futureValueOnMonthBasis = investment;
for (let month = 1; month <= (years * 12); month++ ) {
    futureValueOnMonthBasis += futureValueOnMonthBasis * ((rate / 100) / 12);
}

// display results based on yearly calculation
document.write(`<h4>Future Value With Yearly Interest</h4>`);
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

// display results based on monthly calculation
document.write(`<h4>Future Value With Monthly Interest</h4>`);
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValueOnMonthBasis.toFixed(2)}</p>`);