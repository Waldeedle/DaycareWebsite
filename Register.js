var studentProfile = [];
var index=0;

function saveProfile()
{ 
 studentProfile[index] = {
  firstName: document.getElementById("txtFirstName").value,
  surname: document.getElementById("txtSurname").value,
  birthday: document.getElementById("txtBirthday").value,
  contactInfomation: document.getElementById("txtContactInfomation").value,
  medicalInformation: document.getElementById("txtMedicalInformation").value,
 } 
 index = index + 1;
 localStorage.setItem("students", JSON.stringify(studentProfile));
}

function displayProfile()
{
    for (var i = 0; i<studentProfile.length; i++) { 
  alert("The Student's Name is " + studentProfile[i].firstName + " " + studentProfile[i].surname + "."); 
  alert("The Student's Birthday is " + studentProfile[i].birthday + "."); 
  alert("The Student's Contact Information is: " + studentProfile[i].contactInfomation + "."); 
  alert("The Student's Medical Information is: " + studentProfile[i].medicalInformation) + "."; 
  
 }
}

function clearData() 
{
     document.getElementById("txtFirstName").value = "";
     document.getElementById("txtSurname").value = "";
     document.getElementById("txtBirthday").value = "";
     document.getElementById("txtContactInfomation").value = "";
     document.getElementById("txtMedicalInformation").value = "";
}

