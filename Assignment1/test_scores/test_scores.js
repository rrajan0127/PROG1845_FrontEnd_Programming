"use strict";

// get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));

const score2 = parseInt(prompt("Enter test score"));

const score3 = parseInt(prompt("Enter test score"));

//Get 4th score from the user and add it to the total
const score4 = parseInt(prompt("Enter test score"));

const total = score1 + score2 + score3 + score4;

// calculate the average
const average = parseInt(total/4);

// display the scores and its average in a dialog box
alert("Score 1 = "+score1 + '\n' +
"Score 2 = "+score2 + '\n' +
"Score 3 = "+score3 + '\n' +
"Score 4 = "+score4 + '\n' +

"Average score = " + average);


// display in browser page
const html = `<p>Score 1 = ${score1}</p>
    <p>Score 2 = ${score2}</p>
    <p>Score 3 = ${score3}</p>
	<p>Score 4 = ${score4}</p>
    <p>Average score = ${average}</p>`;
document.write(html);