var counter=0;
var names = new Array();
var myIndex = 0;
function storeNames()
{

	names[counter] = document.getElementById("getName").value;
	alert("Welcome to the Daycare " + names[counter] + "!!!" + " Your Index # is " + counter);
	counter++;
}

function getName()
{
	myIndex = document.getElementById("getIndex").value;
	alert("The Index # is assigned to " + names[myIndex] + ".");
}