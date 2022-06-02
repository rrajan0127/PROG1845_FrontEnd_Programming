"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
var msg = '';

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value );
	let isValid = true;
	
    
    // check entries for validity
    if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("#name").value = "";
		$("#score").value = "";
		
	}
    $("#name").focus();
};

//Function that displays the score into the text area
const displayValues = () => {
	for (let arrayIndex = 0; arrayIndex < names.length; arrayIndex++) {
		
		msg += names[arrayIndex] + " = " + scores[arrayIndex] + "\n";
		
	}
	document.getElementById("scores_display").value = msg;
	msg = '';
};

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", () => {
		addScore();
		$("#scores_display").value = ''; // Code to clear textarea after adding name and score to the array.
	});
	$("#display_scores").addEventListener("click", displayValues);
	$("#name").focus();
});
