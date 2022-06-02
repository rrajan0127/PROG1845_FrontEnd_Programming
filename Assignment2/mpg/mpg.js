"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
	
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);
    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

var clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

/*Modified this block of code by adding:
 1) Eventlisteners to clear Miles Driven and Gallons of Gas Used: text boxes when the user double-clicks in the Miles Per Gallon text box.
 2) To clear Miles Driven text box when it receives the focus
 3) To clear Gallons of Gas Used text box when it receives the focus
 4) To do the calculation when the focus leaves the Gallons of Gas Used text box.*/
 
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
	$("#mpg").addEventListener("dblclick", clearEntries);
	$("#miles").addEventListener("focus", () => {  
        $("#miles").value = "";
		$("#mpg").value = "";
	});
	$("#gallons").addEventListener("focus", () => {  
        $("#gallons").value = "";
		$("#mpg").value = "";
	});
	
	$("#gallons").addEventListener("focusout", () => {  
		
		//Added this check to avoid displaying error message when Gallons of Gas Used: text box is empty and leaving the focus from it.
		if ($("#gallons").value != "") { 
		processEntries();
		} 
	});
    $("#miles").focus();
});

