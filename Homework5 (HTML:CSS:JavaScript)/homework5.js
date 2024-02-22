//Using ternary operator
var truthValue = true;
var test1 = truthValue ? 'truth' : 'false';

var truthValue2 = false;
var test2 = truthValue2 ? 'truth' : 'false';


//Creating an object and running a loop through its properties
const duck = {
	name: 'Carlos',
	featherColor: 'Green',
	favFood: 'Bread'
};

for (const [key, value] of Object.entries(duck)) 
{
	console.log(`Key: ${key}, Value: ${value}`);
}


//Using map function to create new array from established array
const arr = [1, 2, 3, 4];
const mapArr = arr.map((x) => x * x);


//Button that changes text
function changeText()
{
	var test = document.getElementById("specialButton");
	if (test.value =="Click Me")
	{
		test.value = "Woah";
	}
	else
	{
		test.value = "Click Me";
	}
}


//List with changing elements
function changeColor()
{
	var test2 = document.getElementById("surferList");
	var testColor = test2.style.color;
	if (testColor != "blue")
	{
		test2.style.color = "blue";
	}
	else{
		test2.style.color = "black";
	}
}

//Div with second button element that appends a paragraph
function addText()
{
	const para = document.createElement("p");
	const node = document.createTextNode("Silver Surfer is a character from the Marvel comic universe. He is a character often seen in space adventures and is usually associated with the Fantastic Four. The Fantastic Four recently had a major announcement made for their upcoming movie in 2025 revealing the cast of the iconic four, which is why I am excited and randomly talking about Silver Surfer. Thank you for indulging me.")
	para.appendChild(node);
	const el = document.getElementById("divTime");
	el.appendChild(para);
}