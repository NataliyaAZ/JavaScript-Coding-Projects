function getReceipt() {
	text1 = ""; 
	text2 = ""; 
	var runningTotal = 0; //Total amount
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	runningTotal =sizeTotal;
	getCrust(runningTotal,text1,text2); 
};	

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
		text2 = text2+crustTotal+"<br>";
	} else  {
		crustTotal = 0;
		text2 = text2+crustTotal+"<br>";
	}
    runningTotal = runningTotal + crustTotal;
	getSauce(runningTotal,text1,text2);	
};

function getSauce(runningTotal,text1,text2) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	text2 = text2+sauceTotal+"<br>";
	runningTotal = runningTotal + sauceTotal;
    getCheese(runningTotal,text1,text2);		
};		

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra cheese") {
		cheeseTotal = 3;
		text2 = text2+cheeseTotal+"<br>";
	} else  {
		cheeseTotal = 0;
		text2 = text2+cheeseTotal+"<br>";
	}
    runningTotal = runningTotal + cheeseTotal;	
	getMeats(runningTotal,text1,text2);	
};

function getMeats(runningTotal,text1,text2) {
	var meatsTotal = 0;
	var meatsCount = 0; //to keep track of meats number
	var meatsArray = document.getElementsByClassName("meats");
	for (var i = 0; i < meatsArray.length; i++) {
		if (meatsArray[i].checked) {
			var selectedMeats = meatsArray[i].value;
			text1 = text1+selectedMeats+"<br>";
			meatsCount = meatsCount + 1;
			if (meatsCount > 1) {
				var meatsPrice = 1
		        meatsTotal = meatsTotal + meatsPrice;
		        text2 = text2+meatsPrice+"<br>";
	        } else  {
				meatsPrice = 0
		        meatsTotal = meatsTotal + meatsPrice;
		        text2 = text2+meatsPrice+"<br>";
	        }
		}
	}	
    runningTotal = runningTotal + meatsTotal;
	getVeggies(runningTotal,text1,text2);	
};

function getVeggies(runningTotal,text1,text2) {
	var veggiesTotal = 0;
	var veggiesCount = 0; //to keep track of veggies number 
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var i = 0; i < veggiesArray.length; i++) {
		if (veggiesArray[i].checked) {
			var selectedVeggies = veggiesArray[i].value;
			text1 = text1+selectedVeggies+"<br>";
			veggiesCount = veggiesCount + 1;
			if (veggiesCount > 1) {
				var veggiesPrice = 1
		        veggiesTotal = veggiesTotal +veggiesPrice;
		        text2 = text2+veggiesPrice+"<br>";
	        } else  {
				veggiesPrice = 0
		        veggiesTotal = veggiesTotal + veggiesPrice;
		        text2 = text2+veggiesPrice+"<br>";
	        }
		}
	}
    runningTotal = runningTotal + veggiesTotal;
	document.getElementById("text1").innerHTML=text1;
	document.getElementById("text2").innerHTML=text2;
	document.getElementById("totalAmount").innerHTML = "$"+runningTotal+".00";
};

function cancelOrder() {
	location.reload()		
};
		