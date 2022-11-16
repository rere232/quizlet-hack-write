
setInterval(function () {
	

chrome.storage.local.get(['key'], function (result) {

	textFR = document.getElementsByClassName('ttuvcp0')[0];

	// 
	x1 = textFR.textContent;

	// 
	console.log(textFR.innerText);


	textDE = document.getElementsByClassName('ttuvcp0')[1];

	// 
	x2 = textDE.textContent;

	test1 = result.key
	console.log(test1);



if (test1 == x1) {
	console.log("working with 0, Found Value");
	var dummy = document.createElement("input");

	// Add it to the document
	document.body.appendChild(dummy);

	// Set its ID
	dummy.setAttribute("id", "dummy_id");

	// Output the array into it
	document.getElementById("dummy_id").value = x2;

	// Select it
	dummy.select();

	// Copy its contents
	document.execCommand("copy");

	// Remove it as its not needed anymore
	document.body.removeChild(dummy);
	nbrcount = 1;
	chrome.storage.local.set({ mykey: nbrcount }, function () {
		console.log('Value is set to ' + nbrcount);
	});
	setTimeout(function () {
		nbrcount = 0
	}, 200);
}

else if (test1 == x2) {
	console.log("working with 1, Found Value");
	var dummy = document.createElement("input");

	// Add it to the document
	document.body.appendChild(dummy);

	// Set its ID
	dummy.setAttribute("id", "dummy_id");

	// Output the array into it
	document.getElementById("dummy_id").value = x1;

	// Select it
	dummy.select();

	// Copy its contents
	document.execCommand("copy");

	// Remove it as its not needed anymore
	document.body.removeChild(dummy);
	nbrcount = 1;
	chrome.storage.local.set({ mykey: nbrcount }, function () {
		console.log('Value is set to ' + nbrcount);
	});
	setTimeout(function () {
		nbrcount = 0
	}, 200);
}

else {
	console.log("not working")
	document.getElementsByClassName('o1rfl3bx')[1].click(); chrome.storage.local.set({ mykey: 0 }, function () {
		console.log('Value is set to ' + "0");
	}); }
	
	setTimeout(function () {
		document.getElementsByClassName('w1e3jc65')[1].click()
	}, 20);
 

}); 
}, 120);





