//  I P O

//  I: The object from the register.js

//  O: Whose birthday is today, if there is one
//	Waleed Masoom
//	ICS3UO
//	December 20TH, 2013
//	Birthday Program
//	The program takes the object that was made from user input in the register page and uses that data to determine if anyone has a birthday today, if someone does have a birthday today then the program finds their first name and displays it in the html at the bottom

function birthday()
{

//state all the variables for the program and convert the JSON string from the register js back into an object
var studentProfile = new Object();
var studentBirthday;
var bdayMonth, bdayDay;
var birthDate = new Date();
var today = new Date();
var todayMonth;
var todayDay;
studentProfile = JSON.parse(localStorage.getItem("students"));

// this variable is to make the code stop looping if there are birthdays, its used later on in the code
var birthday_found = false;

// this variable is for the birthday picture to disappear if there are no birthdays, its used later on in the code
var BirthdayBorder = document.getElementById("BirthdayBorder");

// this variable is for the text to change position if there are no birthdays, its used later on in the code
var txtbirthday = document.getElementById("txtContainer");

   //I had an alert here to see if the javascript was accurately able to convert the string back into an object and after this is the actual programs code
	
	for (var i = 0; i < studentProfile.length; i++) 
	{
	 	
		//here is where the variables regarding the date were specified and extracted from the object that was converted
		bdayMonth = studentProfile[i].birthday.substring(0,2);
		bdayDay = studentProfile[i].birthday.substring(3,5);
		todayMonth = today.getMonth()+1;
		todayDay = today.getDate();
	
		//this is where the comparison part of the code starts, basically the birthday entered by the user is compared with today's date
		if ((bdayDay == todayDay) && (bdayMonth == todayMonth)) 
		{
		
		//if the dates are equal to one another then the student's firstname is determined and displayed as an output in the html
			document.getElementById("birthdays").innerHTML = studentProfile[i].firstName + " " + studentProfile[i].surname;
			BirthdayBorder.style.opacity = "100";
			BirthdayBorder.style.marginTop = "0px";
			txtbirthday.style.marginTop = "144px";
			birthday_found = true;
        	break;
		}
    }

		
		if (!birthday_found)
		{
		//the program has determined that there are no birthdays today and will display the text instead of a student's name
		 	document.getElementById("birthdays").innerHTML = "No Birthdays Today! ;)";
	
			//this is the styling part for the birthday border to be transparent and moved to a place where it isn't affecting the website's margins and the text is moved to look better than being in empty space
			BirthdayBorder.style.opacity = "0";
			BirthdayBorder.style.marginTop = "-1000px";
			txtbirthday.style.marginTop = "-50px";
		}
}