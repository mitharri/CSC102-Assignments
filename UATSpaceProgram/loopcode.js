/*
Mitchell Harris
6-5-22
Mission Control Operator Login
*/ 

/*this is the varablie code for name input*/
var name = window.prompt("Enter you first and last name:");

/* this is the variable for the badge number*/
var badgenumber = window.prompt ("Enter your badge number:")

/*this code is to start the loop to letter quantity*/
while(name.length <= 0 || name.length > 20)
{
/*this is the code if the character value is greater than 20*/    
    name = window.prompt("Enter a name between 1 and 20 characters...")
}

/*this code is to start the loop badge number value this also sets the character value to exactly 3*/
while(badgenumber.length <= 2 || badgenumber.length > 3)
{
/*this is the code to prompt the if the value is incorrect*/
    badgenumber = window.prompt("Badge Number is a 3 digit number.")
}

/*this code writes if all parameters are met*/
document.write("Your name is " + name);

/*this is the line break in java script*/
document.write("<br></br>");

/*this code also appears if all parameters are met*/
document.write("Your Badge number is " + badgenumber);


