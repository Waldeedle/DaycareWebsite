//  I P O

//  I: None


//  O: Average of the numbers

var numbers = new Array();
var total =0;
var numberOfNumbers = 50;


function findAverage()
{
	total = 0;

	//Array of Random numbers
	for (var i = 0; i < numberOfNumbers; i++) 
	{
		numbers[i] = Math.floor(Math.random()*100+1);
	}

	// Add all the Numbers Together

	for (var i = 0; i < numberOfNumbers; i++)
	{
		total += numbers[i];
	}
	//Get Average of the Sum and Display Answer
	document.getElementById("average").innerHTML=(total/numberOfNumbers);
}

function showNumbers()
	{
    	document.getElementById("numbers").innerHTML=(numbers);
	}
