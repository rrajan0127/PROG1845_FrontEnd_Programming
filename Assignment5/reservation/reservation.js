"use strict";

const isValidDate = (d) => {
	return d instanceof Date && !isNaN(d);
};

$(document).ready( () => {
	
	$("#arrival_date").focus();
	
	//Event handler to submit the form
	$("#reservation_form").submit( event => {
		
		//Assign user input values to variables
		let arrivalDate = $("#arrival_date").val();
		const numberOfNights = $("#nights").val();
		const adults = $('#adults :selected').text();
		const children = $('#children :selected').text();
		const roomType = $("input[name='room']:checked").val();
		const bedType = $("input[name='bed']:checked").val();
		const contactName = $("#name").val().trim();
		const email = $("#email").val().trim();
		const phoneNumber = $("#phone").val();
		
		//Phone pattern and Email pattern to validate user input
		const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		
		let isValid = true;
		
		//Checking arrival date is empty or not
		if (arrivalDate == "" || arrivalDate.length == 0) {
		
			$("#arrival_date").next().text("Date is required");
			isValid = false;
		}
		else {
			arrivalDate = new Date(arrivalDate);
		}
		
		// Checking the arrival date format 
		if (isValidDate(arrivalDate)) {   
			$("#arrival_date").next().text("");  
			isValid = true;
        }
			
		else {
            $("#arrival_date").next().text("Please enter the date as MM/DD/YYYY" );
			isValid = false;
        }
	
		// Validating input field: Night
		if (isNaN(numberOfNights) || numberOfNights.length == 0) {
			$("#nights").next().text("Number of Night is invalid");
			isValid = false;
		} 
		else {
			$("#nights").next().text("");
		}
		
		// Validating input field: Name
		if (contactName == "") {
			$("#name").next().text("Name field is required.");
            isValid = false;
        }
		else {
            $("#name").next().text("");
        }
        $("#name").val(contactName);
		
		// Validating input field: Email
        if (email == "") { 
            $("#email").next().text("E-mail field is required.");
            isValid = false;
        }
        else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);
		
		// Validating input field: Phone numner
		if ( phoneNumber === "" || !phonePattern.test(phoneNumber) ) {
            isValid = false;
            $("#phone").next().text("Please enter phone number " + "in 999-999-9999 format.");
        }

		
		// Submit the form if all entries are valid
		if (isValid == true) {
			return true;
		}
		
		else {
			return false;
		}
		
	}); //end of form submit
		
}); // end ready