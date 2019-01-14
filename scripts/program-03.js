"use strict"

function searchString() {
	var str1 = document.getElementById("tex1").value;
	var search = document.getElementById("search1").value;
	var reObject = new RegExp(search,'gi');
	var result = str1.match(reObject);
	//document.getElementById("result").innerHTML = result;

	if (result == null) {
		document.getElementById("result").innerHTML = "Zero Matches found!";
	}else {
		document.getElementById("result").innerHTML = "Match Found: " + result;
	}
}

function replaceString() {
	var str1 = document.getElementById("tex2").value;
	var replace = document.getElementById("replace2").value;
	var sentence = document.getElementById("replace").innerHTML;

	var result = sentence.replace(new RegExp(str1, 'gi'), replace);
	document.getElementById("replace").innerHTML = result;
}

function checkNumber() {
	var x = document.getElementById("num3").value;
	var message = document.getElementById("resultCheck");
	message.innerHTML = "";
	try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);

        if(x < 500)    throw "too low, number is off by: " + (500 - x);
        if(x > 2000)   throw "too high, number is off by: " + Math.abs(2000 - x);
        
        if (x >= 500 && x <= 2000) {
        	message.innerHTML = "Input is in range";
        }
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
function checkNumberError() {
	var x = document.getElementById("num4").value;
	var message = document.getElementById("resultCheck4");
	message.innerHTML = "";
	try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        
        console.log("X = " + x);
        debugger;

        if(x < 500)    throw "too low, number is off by: " + (500 - x);
        if(x > 2000)   throw "too high, number is off by: " + Math.abs(2000 - x);
        
        if (x >= 500 && x <= 2000) {
        	message.innerHTML = "Input is in range";
        }
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}

document.getElementById("styleGuideList").addEventListener("click",function(e) {
	// e.target is our targetted element.
    console.log(e.target.nodeName)
	if(e.target && e.target.nodeName == "LI") {
		if (e.target.id == "variable") {
			alert("Use camelCase for identifier names (variables and functions). All names start with a letter.")
		}
		if (e.target.id == "spaces") {
			alert("Always put spaces around operators ( = + - * / ), and after commas")
		}
		if (e.target.id == "indentation") {
			alert("Always use 4 spaces for indentation of code blocks, no TABS. Guess this solves the SPACES OVER TABS argument")
		}
		if (e.target.id == "stateRules") {
			alert("Always end a simple statement with a semicolon.\nPut the opening bracket at the end of the first line.\nUse one space before the opening bracket.\nPut the closing bracket on a new line, without leading spaces.\nDo not end a complex statement with a semicolon.")
		}
		if (e.target.id == "objRules") {
			alert("Place the opening bracket on the same line as the object name.\nUse colon plus one space between each property and its value.\nUse quotes around string values,\nnot around numeric values.\nDo not add a comma after the last property-value pair.\nPlace the closing bracket on a new line, without leading spaces.\nAlways end an object definition with a semicolon.")
		}
		if (e.target.id == "lineRules") {
			alert("For readability, avoid lines longer than 80 characters. Realizing that with these alert lines, I am exceding the recommened charater limit, and making it worse, I will stop... ")
		}
		if (e.target.id == "naming") {
			alert("Variable and function names written as camelCase.\nGlobal variables written in UPPERCASE (We don't, but it's quite common)\nConstants (like PI) written in UPPERCASE")
		}
		if (e.target.id == "loading") {
			alert("Use simple syntax for loading external scripts (the type attribute is not necessary).")
		}
		if (e.target.id == "accesing") {
			alert("A consequence of using 'untidy' HTML styles, might result in JavaScript errors.\nIf possible, use the same naming convention (as JavaScript) in HTML.")
		}
		if (e.target.id == "extensions") {
			alert("HTML files should have a .html extension (not .htm).\nCSS files should have a .css extension.\nJavaScript files should have a .js extension.")
		}
		if (e.target.id == "lowerCase") {
			alert("Always use lower case file names (if possible).")
		}

		//alert(e.target.id);
	}
});
styleGuideList.onmousedown = function(event) {
      if (event.target.tagName != "LI") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
      } else {
        singleSelect(event.target);
      }

}

function toggleSelect(li) {
      li.classList.toggle('selected');
}

function singleSelect(li) {
      let selected = styleGuideList.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
}

document.getElementById("bestPracticesList").addEventListener("click",function(e) {
	// e.target is our targetted element.
    console.log(e.target.nodeName)
	if(e.target && e.target.nodeName == "LI") {
		if (e.target.id == "global") {
			alert("Minimize the use of global variables.\nThis includes all data types, objects, and functions.\nGlobal variables and functions can be overwritten by other scripts.\nUse local variables instead, and learn how to use closures.")
		}
		if (e.target.id == "local") {
			alert("All variables used in a function should be declared as local variables.\nLocal variables must be declared with the var keyword, otherwise they will become global variables.\nStrict mode does not allow undeclared variables.")
		}
		if (e.target.id == "indentation") {
			alert("Always use 4 spaces for indentation of code blocks, no TABS. Guess this solves the SPACES OVER TABS argument")
		}
		if (e.target.id == "declarations") {
			alert("It is a good coding practice to put all declarations at the top of each script or function.\nGive cleaner code\nProvide a single place to look for local variables\nMake it easier to avoid unwanted (implied) global variables\nReduce the possibility of unwanted re-declarations")
		}
		if (e.target.id == "initialize") {
			alert("It is a good coding practice to initialize variables when you declare them.\nGive cleaner code\nProvide a single place to initialize variables\nAvoid undefined values")
		}
		if (e.target.id == "declare") {
			alert("Always treat numbers, strings, or booleans as primitive values. Not as objects.\nDeclaring these types as objects, slows down execution speed, and produces nasty side effects.")
		}
		if (e.target.id == "newObject") {
			alert("Use brackets instead of new Object\nUse quotes instead of new String\nUse 0 instead of new Number\nUse false instead of new Boolean\nUse brackets instead of new Array\nUse instead of new RegExp\nUse function brackets instead of new Function")
		}
		if (e.target.id == "conversions") {
			alert("Beware that numbers can accidentally be converted to strings or NaN.\nJavaScript is loosely typed. A variable can contain different data types, and a variable can change its data type.\nSubtracting a string from a string, does not generate an error but returns NaN.")
		}
		if (e.target.id == "comparison") {
			alert("The == comparison operator always converts to matching types, before comparison.\nThe === operator forces comparison of values and type:")
		}
		if (e.target.id == "defaults") {
			alert("If a function is called with a missing argument, the value of the missing argument is set to undefined.\nUndefined values can break your code. It is a good habit to assign default values to arguments.")
		}
		if (e.target.id == "switches") {
			alert("Always end your switch statements with a default.\nEven if you think there is no need for it.")
		}
		if (e.target.id == "avoidEval") {
			alert("The eval function is used to run text as code.\nIn almost all cases, it should not be necessary to use it.\nBecause it allows arbitrary code to be run, it also represents a security problem.")
		}

		//alert(e.target.id);
	}
});
bestPracticesList.onmousedown = function(event) {
      if (event.target.tagName != "LI") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect1(event.target);
      } else {
        singleSelect1(event.target);
      }

}

function toggleSelect1(li) {
      li.classList.toggle('selected');
}

function singleSelect1(li) {

      let selected = bestPracticesList.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
}

function parseString() {
	var stateCapital = '[{ "stateName":"Texas", "capitalName":"Austin", "qualityRating": 8 },{ "stateName":"California", "capitalName":"Sacramento", "qualityRating": 7 },{ "stateName":"New York", "capitalName":"New York City", "qualityRating": 9 },{ "stateName":"Louisiana", "capitalName":"Baton Rouge", "qualityRating": 7 }]';
	
	var obj = JSON.parse(stateCapital);
  	//console.log(obj);
	walk(obj);

}

function walk(obj) {
	for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(val);

      var table = document.getElementById("stateTable");
      var row = table.insertRow();

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = val.stateName;
      cell2.innerHTML = val.capitalName;
      cell3.innerHTML = val.qualityRating;

    }
  }
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == "" || y == "") {
        alert("All fields must be filled out");
        return false;
    }
}

var fieldElement=document.getElementById('rangeO');
  function onBlurHandler(event){
    var field = event.target;
    console.log(field.validity, field.validity.rangeOverflow);
    if(!!field.validity) {
      if(!!field.validity.rangeOverflow){
        // Try setting a range over 20
        field.setCustomValidity("The number is outside of an acceptable range. OVERFLOW");
      } else {
        field.setCustomValidity(""); // Has to be an empty string
      }
    } else {
      // Legacy validation
    }
    //console.log(field.validity);
  }
  fieldElement.addEventListener('blur', onBlurHandler, false);


var el=document.getElementById('rangeU');
function validRange(evt){
	var el=evt.target;
	if(el.validity){
	// HTML5 aware browsers
	if(el.validity.rangeUnderflow){
	el.setCustomValidity('The entered number is outside the acceptable range. UNDERFLOW');
	}else{
	el.setCustomValidity("");
	}
	}else{
	// legacy validation

	}
}
el.addEventListener('blur',validRange,false);

function checkNumberValueMissing() {

	var valid = document.getElementById('foo').validity.valueMissing;

	if (valid) {
		document.getElementById("resultCheck3").innerHTML = "VALUE MISSING";
	}
}

var bike = {name: 'SuperSport', maker:'Ducati', engine:'937cc'};

function createObjLit() {
	

	console.log(bike.name);

	document.getElementById("bikeObj1").innerHTML = bike.name;
	document.getElementById("bikeObj2").innerHTML = bike.maker;
	document.getElementById("bikeObj3").innerHTML = bike.engine;
}
var bike2 = new Object();
	bike2.name = "SuperRunner";
	bike2.maker = "Harley";
	bike2.engine = "832cc";

function createObjNew() {
	
	document.getElementById("bikeObj11").innerHTML = bike2.name;
	document.getElementById("bikeObj22").innerHTML = bike2.maker;
	document.getElementById("bikeObj33").innerHTML = bike2.engine;

}

function Vehicle(name, maker) {
   this.name = name;
   this.maker = maker;
}

var car1 = new Vehicle("Fiesta", "Ford");

function createObjConst() {

	document.getElementById("carObj").innerHTML = car1.name;
	document.getElementById("carObj2").innerHTML = car1.maker;
	

}

function addObjConst() {
	car1.engine = "5.1L";
	
	document.getElementById("carObj3").innerHTML = car1.engine;
	document.getElementById("vArray").innerHTML = "";
	addObjArray();
}	

function delObjConst() {
	delete car1.engine;
	document.getElementById("carObj4").innerHTML = "Property Deleted";
	document.getElementById("vArray").innerHTML = "";
	addObjArray();
}

function addObjArray() {
	var vehicleArray = [];
	vehicleArray.push(bike);
	vehicleArray.push(bike2);
	vehicleArray.push(car1);

	
	var myJSON = JSON.stringify(vehicleArray);
	var length = myJSON.length;

	for (var i = 0; i < length; i++) {
    	if (myJSON[i] == "\"" || myJSON[i] == "\[" || myJSON[i] == "\}" || myJSON[i] == "\{" || myJSON[i] == "\]") {



    	} else if (myJSON[i] == "\,"){
    		var para = document.createElement("br");
			var node = document.createTextNode("  ");
		
			para.appendChild(node);
			var element = document.getElementById("vArray");
			element.appendChild(para);

    	} else if (myJSON[i] == "\:") {
    		var para = document.createElement("p");
			var node = document.createTextNode(":_____");
			
			para.appendChild(node);
			var element = document.getElementById("vArray");
			element.appendChild(para);

    	}else {
    		var para = document.createElement("p");
			var node = document.createTextNode(myJSON[i]);
		
			para.appendChild(node);
			var element = document.getElementById("vArray");
			element.appendChild(para);
    	}
	    
	}

}

function Aircraft (name, maker, speed, change) {

	this.name = name;
	this.maker = maker;
	this.speed = Number(speed);
	this.changeSpeed = function (change) {
		this.speed = Number(change) + Number(speed);
	}

}
var airEX = new Aircraft("757", "Boeing", 200);
function aircraftObject() {
	
	var speedChange = document.getElementById("newSpeed").value;
	Number(speedChange);
	airEX.changeSpeed(speedChange);
	console.log(speedChange);
	document.getElementById("air1").innerHTML = airEX.name;
	document.getElementById("air2").innerHTML = airEX.maker;
	document.getElementById("air3").innerHTML = airEX.speed;

}

Aircraft.prototype.range = 2000;
Aircraft.prototype.addFuel = function(){
	return (this.range / this.speed).toFixed(2);
}

function aircraftObjectChange() {
	airEX.range = 4000;
	console.log(airEX.range);
	document.getElementById("air11").innerHTML = airEX.name;
	document.getElementById("air22").innerHTML = airEX.maker;
	document.getElementById("air33").innerHTML = airEX.speed;
	document.getElementById("air44").innerHTML = airEX.range;
	document.getElementById("air55").innerHTML = airEX.addFuel();
}