"use strict";
const images = document.querySelectorAll("#image_rollovers img");
let timerObj;

const startMyTimer = () => {
	timerObj = setTimeout(fun,1000);
}

document.addEventListener("DOMContentLoaded", () => {
    
	// preload images
	for ( let image of images ) {
        
        const imageObj = new Image();
        imageObj.src = image.id;
	}
	
    // process each img tag
	for (let image of images) {
		const oldURL = image.src;
        const newURL = image.id;
		
		//To load rollover images after 1 second of pageload
        setTimeout(function displayRolloverImages() {
		image.src = newURL;
		}, 1000);
		
		//To load original images after 2 seconds of pageload
		setTimeout(function displayOldImages() {
		image.src = oldURL;
		}, 2000);
		
    }
});