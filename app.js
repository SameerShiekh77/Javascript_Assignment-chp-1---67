// CHAPTER # 1

//Task 1

//1.Write a script to greet your website visitors using JS alert box
alert("Welcome! Sir")

//Task 2

//2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password")

//Task 3

//3. Write a script to display following message on your web page: (Hint: Use line break)
alert("Welcome to JS Land...\nHappy Coding!")

//Task 4

//4. Write a script to display following message in sequence
var box;
alert("Welcome to JS Land...");

alert("Happy Coding\nPrevent this page from creatng additional dialogs");

//Task 5

//5. Generate the following message through browser's developer console:
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");


//CHAPTER # 2

//Task 1

//1. Declare a variable called Username
document.write("Declare a variable called Username")
var username;

//Task 2

//2. Declare a variable called myName & assign to it a string that represents your full name
document.write("Declare a variable called myName & assign to it a string that represents your full name")
var myName = 'Muhammad Sameer';

//Task 3

/*3. Write script to
a) Declare a JS variable, titled message
                            b) Assign "HELLO WORLD" to varibale message
                            c) Display the message in alert box*/

var message = 'Hello World'
alert(message);

//Task 4

//4. Write a script to save students'bio data in JS variable and show the data in alert boxes
var myName = 'Muhammad Sameer';
alert(myName);
alert("20 years old");
alert("Certified Mobile Application Development");

//Task 5

//5. Write a script to display the following alert using one JS variable:

var a = "PIZZA";
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Task 6

//6. Declare a variable called email and assign to it a string that represents your Email Address (e.g. example@example.com). Show the blow mentioned message in an alert box. (Hint: use string concatenation)
var email = "muhammadsameer.css@gmail.com";
alert("My email address is " + email);

//Task 7

//7. Declare a variable called book and give it the value "A smarter way to learn JavaScript". Display the following message in an alert box.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8

//8. Write a script to display this in brwoser through JS
document.write("Yah! I can write HTML content through JavaScript <br> <br>");

//Task 9

//9. Store following string in a variable and show in alert and browser through JS
var end = "---------ஜ۩۞۩ஜ---------";
alert(end);
document.write(end + "<br>");

//CHAPTER # 3

//Task 1

//1. Declare a variable called age and assign to it your age. Show your age in an alert box
var age = 20;
alert("I am " + age + " years old");

//Task 2

//2. Declare and initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of vists on your web page. For example: "You have visited this site N times"
var time = 0;
var a = 'We are exit now';
for (var i = 1; i > 0; i++) {
    let v = confirm(a);
    if (v == true) {
        time = time + 1;
        alert("You have visited this site " + time + " times")
        break;

    } else if (v == false) {
        time = time + 1
        alert("You have visited this site " + time + " times")
    }
}

//Task 3

//3. Declare a varaible called birthYear & assign to it your birth year. Show the following message in your browser
var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number <br><br><br>");

//Task 4

/*4. A visitor visits an online clothing store 
                            www.xyzClothing.com . Write a script to store in variables 
                            the following information: 
                            a. Visitor’s name
                            
                            b. Product title
                            
                            c. Quantity i.e. how many products a visitor wants to order
                            
                            Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

alert("Welcome to www.xyzClothing.com")
var Visitor = prompt("What is your name?", "Guest");
var product = prompt("Which type of Product you see here?", "Shoes");
var Quantity = prompt("How many products you wants to order?");
document.write(Visitor + " ordered " + Quantity + " " + product + " on XYZ Clothing store");

//CHAPTER # 4

//Task 1

//1. Declare 3 variables in one statement.
document.write("Declare 3 variables in one statement")
var letter = "letter",
    $ = "$",
    _ = "_";

//Task 2

//2. Declare 5 legal & 5 illegal variable names.
document.write("Declare 5 legal & 5 illegal variable names")
var var1 = 'name';
var var2 = '_name';
var var3 = 'name1';
var var4 = '$name';
var var5 = 'name_32';
var var6 = "keywords";
var var7 = "2name";
var var8 = "name@";
var var9 = "name%";
var var10 = "5_name";

//Task 3

//3. Display this in your browser
//              a)  A heading stating “Rules for naming JS variables” 
//            b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//          c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//        d) Variable names are case _________ 
//      e) Variable names should not be JS _________
var letter = "letter",
    $ = "$",
    _ = "_";

var var1 = 'name';
var var2 = '_name';
var var3 = 'name1';
var var4 = '$name';
var var6 = "keywords";
document.write("A heading stating “Rules for naming JS variables” <br>Variable names can only contain" + var1 + ", " + var2 + ", " + var3 + " and " + var4 + ".For example $my_1stVariable <br>Variables must begin with a " + letter + ", " + $ + " or " + _ + ".For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS " + var6);

//CHAPTER # 5

//Task 1

//1.Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//Task 2

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var sum, subtraction, multiplication, division, modulus;

sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
subtraction = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
multiplication = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication);
division = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + division);
modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

//Task 3

/*3. Do the following using JS Mathematic Expressions 
                a. Declare a variable.
                 
                b. Show the value of variable in your browser like “Value 
                after variable declaration is: ??”.
                c. Initialize the variable with some number.
                 
                d. Show the value of variable in your browser like “Initial 
                value: 5”. 
                e. Increment the variable.
                 
                f. Show the value of variable in your browser like “Value 
                after increment is: 6”.
                 
                g. Add 7 to the variable. 
                h. Show the value of variable in your browser like “Value 
                MATH EXPRESSIONS| JAVASCRIPT
                after addition is: 13”. 
                i. Decrement the variable.
                 
                j. Show the value of variable in your browser like “Value 
                after decrement is: 12”.
                 
                k. Show the remainder after dividing the variable’s value 
                by 3.  
                l.
                Output : “The remainder is : 0”.*/

var a;
document.write("<br>Value after variable declaration is " + a);
var b = 5;
document.write("<br>Initial value: " + b);
b = b + 1;
document.write("<br>Value after increment is: " + b);
b = b + 7;
document.write("<br>Value after addition is: " + b);
b = b - 1;
document.write("<br>Value after decrement is: " + b);
b = b % 3;
document.write("<br>The remainder is : " + b);

//Task 4

/*4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie*/

var ticket = 600;
var buying = +(prompt("How many tickets you want to buy?"));
var cost;
cost = ticket * buying;
document.write("<br>Total Cost to buy " + buying + " tickets to a movie is " + cost + "PKR");

//Task 5

//5.Write a script to display multiplication table of any number in your browser. E.g
var a = prompt("Enter any number");
document.write("Table of " + a + "<br>");
document.write(a + "X 1 = " + a * 1 + "<br>");
document.write(a + "X 2 = " + a * 2 + "<br>");
document.write(a + "X 3 = " + a * 3 + "<br>");
document.write(a + "X 4 = " + a * 4 + "<br>");
document.write(a + "X 5 = " + a * 5 + "<br>");
document.write(a + "X 6 = " + a * 6 + "<br>");
document.write(a + "X 7 = " + a * 7 + "<br>");
document.write(a + "X 8 = " + a * 8 + "<br>");
document.write(a + "X 9 = " + a * 9 + "<br>");
document.write(a + "X 10 = " + a * 10 + "<br>");

//Task 6

//6.The temperature converter: Its hot out! Let's make a converter based on the steps here.
//a. Store a Celsius temperature into a variable
//b. Convert into Fahrenheit and output "NN°C is NN°F"
//c. Store a Fahrenheit temperature into a variable
//b. Convert into Celsius and output "NN°F is NN°C"
let a = +(prompt("Enter the value of Celsius Temperature"));
let F = (a * 9 / 5) + 32;
let b = +(prompt("Enter the value of Fahrenheit Temperature"));
let C = (b - 32) * 5 / 9;
document.write(a + "°C is " + F + "°F<br>");
document.write(b + "°F is " + C + "°C<br>");

//Task 7

//7.Write a program to implement to checkout process of a shopping cart system for an e-commerce website.
//Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered quantity of item 1
//e. Shipping Charges
//Compute the total cost & show the receipt in your browser.

var item1 = +(prompt("Enter Price of item 1"));
var item2 = +(prompt("Enter Price of item 2"));
var Ordered1 = +(prompt("Enter ordered quantity of item 1"));
var Ordered2 = +(prompt("Enter ordered quantity of item 2"));
var ShippingCharges = 100;
let result1 = item1 * Ordered1;
let result2 = item2 * Ordered2;
let cost = result1 + result2 + ShippingCharges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + Ordered1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + Ordered2 + "<br>");
document.write("Shipping Charges " + ShippingCharges + "<br><br>");
document.write("Total cost of your order is " + cost);

//Task 8

//8. Store total marks and marks obtained by a student in 2 variables. Compute the percentage
//& show the result in your browser

var TM = +(prompt("Enter Total Marks of Student"));
var OM = +(prompt("Enter Obtained Marks of Student"));
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + TM + "<br>");
document.write("Obtained Marks: " + OM + "<br>");
var per = (OM / TM) * 100;
document.write("Percentage: " + per + "%<br>");

//Task 9

//9. Assume we have 10 US Dollars & 25 Saudi Riyals. Write a script to convert the total currency the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>");
let Dollar = 10;
let Saudi_Riyal = 25;
let Exchange1 = 104.80 * Dollar;
let Exchange2 = 28 * Saudi_Riyal;
let cost = Exchange1 + Exchange2;
document.write("Total currecny in PKR: " + cost);

//Task 10

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence.
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//performe all calculation in a single expression

let a = 7;
b = (a + 7) * 10 / 2;
document.write(b);

//Task 11

//11.The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable
//b. Store their birth year in a variable
//c. Calculate their two possible ages based on the stored values.
//  Output them ot the screen like so: "They are either NN or NN years old"

document.write("<h1>Age Calculator</h1>");
let CY = +(prompt("Enter the current year"));
document.write("Current Year: " + CY + "<br>")
let BY = +(prompt("Enter the birth year"));
document.write("Birth Year: " + BY + "<br>")
let age = CY - BY;
document.write("Your age is: " + age);

//Task 12

//12. The Geometrizer: Calculate properties of a circle
//a. Store a radius into a variable
//b. Calculate the circumference based on the radius, and output "The circumference is NN"
//Calculate the area based on the radius, and output "The area is NN"

document.write("<h1>The Geometrizer</h1>");
const pie = 3.142;
let radius = +(prompt("Enter a value of radius"));
document.write("Radius of a circle is: " + radius + "<br>");
let circumference = 2 * pie * radius;
document.write("The Circumference is: " + circumference + "<br>");
let area = pie * radius * radius;
document.write("The Area is: " + area + "<br>");

//Task 13

//13.The Life Time Supply Calculator: Ever wonder how much a "lifetime supply" of your favourite snack is?
//Wonder no more.
//a. Store your favourite snack into a variable
//b. Store your current age into a variable
//c. Store your maximum age into a variable
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN"

document.write("<h1>The Life Time Supply Calculator</h1>");
let favouriteSnacks = prompt("Enter your favourite snack");
document.write("Favourite Snacks: " + favouriteSnacks + "<br>");
let currentAge = +(prompt("Enter your Current age"));
document.write("Current Age: " + currentAge + "<br>");
let maximumAge = +(prompt("Enter your Maximum Age"));
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
let estimatedAmount = +(prompt("Enter your estimated amount per day"));
document.write("Amount of snacks per day: " + estimatedAmount + "<br>");
let total, a, b;
a = maximumAge - currentAge;
b = a * 365;
total = b * estimatedAmount;
document.write("You will need " + total + " to last you until the ripe old age of " + maximumAge);

//CHAPTER # 6 to 9

//Task 1

/*1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:*/

var a = prompt("Enter the value of a");
document.write("Results: <br>The value of a is: " + a + "<br>............................................... <br>")

a = ++a;
document.write("<br>The value of ++a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a++ is: " + a);
a++;
document.write("<br>Now the value of a is: " + a);
a = --a;
document.write("<br> <br>The value of --a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a-- is: " + a);
a--;
document.write("<br>Now the value of a is: " + a);


//Task 2

//2. What will be the output in variables a,b & result after execution of the following script:
//var a = 2, b =1;
//var result = --a - --b + ++b  + b--;
//Explain the output at each stage:
//--a: 1;
//--a - --b: 0;
//--a - --b + ++b: 0; 
//--a - --b + ++b + b--: -1;


var a = 2,
    b = 1;
/*x = --a;
document.write("<br>The value of --a is: " + x);
y = --a - --b;
document.write("<br>The value of --a - --b is: " + y);
z = --a - --b + ++b;
document.write("<br>The value of --a - --b + ++b is: " + z);
w = --a - --b + ++b + b--;
document.write("<br>The value of --a - --b + ++b + b-- is: " + w);*/
var result = --a - --b + ++b + b--;
document.write("<br>The value of a is: " + a);
document.write("<br>The value of b is: " + b);
document.write("<br>Result is: " + result);

//Task 3

//3. Write a program to takes input a name from user & greet the user.
var name = prompt("Enter Your Name");
alert("Welcome to " + name);
document.write("Welcome to " + name);

//Task 5

//5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should  be displayed by default
var num = +(prompt("Enter any number", "5"));
document.write("Table of " + num + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 6

//  6. Take:
//  a) Take three subjects name from user and store them in 3 different variables
//  b) Total marks for each subject is 100, store it in another variable
//  c) Take obtained marks for first subject from user and stored it in different variables
//  d) Take obtained marks for remaining 2 subjects from user and stored them in variables
//  e) Now calculate total marks and percentage and show the result in browser like  this. (Hint: user table)

var sub1 = prompt("Enter Your First Subject Name");
var sub2 = prompt("Enter Your Second Subject Name");
var sub3 = prompt("Enter Your Third Subject Name");
var TM = 100;
var ob1 = +(prompt("Enter Obtained Marks of First Subject"));
var ob2 = +(prompt("Enter Obtained Marks of Second Subject"));
var ob3 = +(prompt("Enter Obtained Marks of Third Subject"));
var per1, per2, per3, PER, OB, TM;
per1 = (ob1 / TM) * 100;
per2 = (ob2 / TM) * 100;
per3 = (ob3 / TM) * 100;
OB = ob1 + ob2 + ob3;
PER = (OB / 300) * 100;

document.write("<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr> <td>" + sub1 + "</td> <td>" + TM + "</td> <td>" + ob1 + "</td> <td>" + per1 + "%</td> </tr> <tr> <td>" + sub2 + "</td> <td>" + TM + "</td> <td>" + ob2 + "</td> <td>" + per2 + "%</td> </tr> <tr> <td>" + sub3 + "</td> <td>" + TM + "</td> <td>" + ob3 + "</td> <td>" + per3 + "%</td> </tr> <tr> <td> </td> <th>" + 300 + "</th> <th>" + OB + "</th> <th>" + PER + "%</th>  </tr> </table>");

//CHAPTER # 9 TO 11

//Task 1

//1. Write a Program to take 'city' name as input from user. If user enter "Karachi" Welcome the user like this:
//"Welcome to city of lights"

var city = prompt("Enter City Name").toUpperCase(city);
if (city === "KARACHI") {
    alert("Welcome to city of lights");
    document.write("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
    document.write("Welcome to " + city);
}

//Task 2

//2. Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma'am

var gender = prompt("What is your gender?\nMale or Female").toLowerCase(gender);
if (gender === "male") {
    alert("Good Morning Sir");
    document.write("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
    document.write("Good Morning Ma'am");
} else {
    alert("Wrong Gender")
}

//Task 3

//3. Write a program to take input color of road traffic signal from the user & show the message:
var color = prompt("Which color you see of traffic signal?").toLowerCase(color);
if (color === 'red') {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Wrong Color! Please try again")
}

//Task 4

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

var remainingfuel = +(prompt("How many reamining fuel in your car (in litres)"));
if (remainingfuel < 0.25) {
    alert("Please refill the fuel in your car");
    document.write("Please refill the fuel in your car");
} else {
    alert("I think you can go with this fuel in any near fuel station");
    document.write("I think you can go with this fuel in any near fuel station");
}

//Task 5

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); //this conditions is not true
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); //this conditions is not true
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true"); //this conditions is not true
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False"); //this conditions is not true
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Task 6

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade as per following table: 

var ob1 = +(prompt("Enter the obtained marks of first subject"));
var ob2 = +(prompt("Enter the obtained marks of second subject"));
var ob3 = +(prompt("Enter the obtained marks of third subject"));
var TM = 300;
var OB = ob1 + ob2 + ob3;
var per;
per = (OB / TM) * 100;
per = per.toFixed(2)
if (per >= 80) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A-one<br>Remarks: Excellent</center>")
} else if (per >= 70) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A<br>Remarks: Good</center>")
} else if (per >= 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: B<br>Remarks: You need to improve</center>")
} else if (per < 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: Fail<br>Remarks: Sorry</center>")
}

//Task 7

//7. Guess game: 
//Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show 
//“Close enough to the correct answer”

var n = 7;
var num = +(prompt("Enter a Guess number"));
if (num === n) {
    alert("Bingo! Correct Answer");
    document.write("Bingo! Correct Answer");
} else if (num > n) {
    alert("Close enough to the correct answer try to lower number");
    document.write("Close enough to the correct answer try to lower number");
} else {
    alert("Close enough to the correct answer try to higher number");
    document.write("Close enough to the correct answer try to higher number");

}

//Task 8

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
//is divisble by 3

var num = +(prompt("Enter the number to check it is divisible by 3"));
var check = num % 3;
if (check === 0) {
    alert(num + " is divisble by 3");
} else {
    alert(num + " can not be divisible by 3")
}

//Task 9

//9. Write a program that checks whether the given input is an even number or an odd number.

var num = +(prompt("Enter the number"));
var check = num % 2;
if (check === 0) {
    alert(num + " is even number");
} else {
    alert(num + " is odd number");
}

//Task 10

//10. Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.”

var T = +(prompt("Enter Weather Temperature"));
if (T > 40) {
    document.write("It is too hot outside");
} else if (T > 30) {
    document.write("The weather today is Normal");
} else if (T > 20) {
    document.write("Today's Weather is cool");
} else if (T > 10) {
    document.write("OMG! Today's weather is so cool");
} else {
    document.write("Its very cool weather")
}

//Task 11

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user

var num1 = +(prompt("Enter First Number"));
var num2 = +(prompt("Enter Second Number"));
var op = prompt("Choose your operation\n(+, -, *, /, %)");
var result;
if (op === "+") {
    result = num1 + num2;
    document.write("Result is: " + result);
} else if (op === "-") {
    result = num1 - num2;
    document.write("Result is: " + result);
} else if (op === "*") {
    result = num1 * num2;
    document.write("Result is: " + result);
} else if (op === "/") {
    result = num1 / num2;
    document.write("Result is: " + result);
} else if (op === "%") {
    result = num1 % num2;
    document.write("Result is: " + result);
} else {
    alert("Invalid Operator");
}

//CHAPTER # 12 TO 13

//Task 1

//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:-A=65, Z=90, a=97, z=122).
var character = prompt("Enter any character");
var c = character.charCodeAt(0);
alert(c);

//Task 2

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var num1 = +(prompt("Enter first integer"));
var num2 = +(prompt("Enter second integer"));
if (num1 > num2) {
    document.write(num1 + " is larger number");
} else if (num2 > num1) {
    document.write(num2 + " is larger number");
} else if (num1 === num2) {
    document.write("Both integers are equal");
}

//Task 3

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = +(prompt("Check your number is positive or negative?"));
if (num > 0) {
    document.write("Number is positive");
}
if (num < 0) {
    document.write("Number is negative");
}
if (num === 0) {
    document.write("Number is zero");
}

//Task 4

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter one alphabate");
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    document.write("True");
} else {
    document.write("False");
}

//Task 5

//5. Write a program that 
//a. Store correct password in a JS variable. 
//b. Asks user to enter his/her password 
//c.Validate the two passwords: 
//  i. Check if user has entered password. If not, then give message “ Please enter your password” 
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show 
//“Incorrect password” otherwise.

var password = "Python_Programmer";
var a = prompt("Enter Your Password");
if (password == a) {
    alert("Correct! The Password you entered matches the original password");
} else if (a == false) {
    alert("Please Enter Your Password")
} else if (password != a) {
    alert("Incorrect password");
}

//Task 6

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//      var hour = 13; 
//if (hour < 18) { 
//greeting = "Good day"; 
//else

//greeting = "Good evening"; 
//}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    document.write(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
    document.write(greeting);
}

//Task 7

//7. Write a program that takes time as input from user in 24 hours clock format like:
//1900 = 7pm. Implement the following case using if, else & else if statements
var time = +(prompt("Enter Time like this format 1900"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}

//CHAPTER # 14 TO 16

//Task 1

//1.Declare an empty array using JS literal notation to store student names in future.

var studentArray = [];
studentArray.push("Sameer", "Emad", "Subhan") //new student names write here and then automatically add in array
document.write(studentArray);

//Task 2

//2. Declare an empty array using JS object notation to store student names in future.
var studentArray = {}
document.write(studentArray);
console.log(studentArray);

//Task 3

//3.Declare and initialize a strings array.
document.write("Declare and initialize a strings array")

let employeeNames = ['Sameer', 'Emad', 'Saim', 'Azhar', 'Ahmar'];
console.log(employeeNames);

//Task 4

//4.Declare and initialize a number array.
document.write("Declare and initialize a number array");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number);

//Task 5

//5.Declare and initialize a boolean array.
document.write("Declare and initialize a boolean array");

let booleanArray = [true, false];
console.log(booleanArray);

//Task 6

//6.Declare and initialize a mixed array.
document.write("Declare and initialize a mixed array");
let mixedArray = [true, false, 0, 5, 9, 7, 4, 3, 'Sameer', 'Emad', 'Saim', 'Azhar', 'Ahmar'];
console.log(mixedArray);

//Task 7

//7.Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS,
//BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

let educationArray = ["SSC", "HSC", 'BCS', 'BS', "BCOM", 'MS', 'M.Phill', 'PhD'];
document.write("<h2>Qualification:</h2><br>1) " + educationArray[0] + "<br>2) " + educationArray[1] + "<br>3) " + educationArray[2] + '<br>4) ' + educationArray[3] + "<br>5) " + educationArray[4] + "<br>6) " + educationArray[5] + "<br>7) " + educationArray[6] + "<br>8) " + educationArray[7]);

//Task 8

//8.Write a program to store 3 student names in an array.Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students like:

let studentNames = [];
studentNames[0] = prompt("Enter First Student Name");
studentNames[1] = prompt("Enter Second Student Name");
studentNames[2] = prompt("Enter Third Student Name");
console.log(studentNames);
let scoreArray = [];
scoreArray[0] = prompt("Enter " + studentNames[0] + " score");
scoreArray[1] = prompt("Enter " + studentNames[1] + " score");
scoreArray[2] = prompt("Enter " + studentNames[2] + " score");
console.log(scoreArray);
let TM = 500;
let per1 = (scoreArray[0] / TM) * 100;
let per2 = (scoreArray[1] / TM) * 100;
let per3 = (scoreArray[2] / TM) * 100;
document.write("<h1>Score of " + studentNames[0] + " is " + scoreArray[0] + ". Percentage: " + per1 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[1] + " is " + scoreArray[1] + ". Percentage: " + per2 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[2] + " is " + scoreArray[2] + ". Percentage: " + per3 + "%<br></h1>");

//Task 9

//9.Initialize an array with color names. Display the array elements in your browser. 
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
//Display the updated array in your browser. 
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
//updated array in your browser. 
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser. 
//e. Delete the last color in the array. Display the updated array in your browser. 
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
//position/index. . Display the updated array in your browser.
//g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.Then
//remove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
let colorNames = [];
colorNames[0] = prompt("What color you wants to add to the beginning?");
document.write(colorNames[0] + ",");
colorNames[1] = prompt("What color you wants to add to the end?");
document.write(colorNames[1] + "<br>");
let a = prompt("Add one more color to the beginning of the array");
let b = prompt("Add one more color to the beginning of the array");
colorNames.unshift(b);
colorNames.unshift(a);
document.write(colorNames + "<br>");
colorNames.shift(colorNames);
document.write(colorNames + "<br>");
colorNames.pop(colorNames);
document.write(colorNames + "<br>");
let indexNumber = +(prompt("Which index you wants to add a color"));
let Color = prompt("Which color you wants to add a index");
colorNames[indexNumber] = Color;
document.write(colorNames + "<br>");
let c = +(prompt("Which index you wants to delete color(s)?"));
let d = +(prompt("How many colors you wants to delete?"));
colorNames.splice(c, d);
document.write(colorNames);

//Task 10

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentScore = [320, 230, 480, 120];
document.write("Scores of Students: " + studentScore);
studentScore.sort();
document.write("<br>Orderd Scores of Students: " + studentScore);

//Task 11

//11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities 
//array.
let cities = ["Karachi", 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
let selectedCities;
document.write("<h3>Cities List:</h3>" + cities + "<br><br>");
selectedCities = cities.slice(2, 4);
document.write("<h3>Selected Cities List:</h3>" + selectedCities);

//Task 12

//12. Write a program to create a single string from the below mentioned array: 
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
//(Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("<h1>Array:</h1> " + arr + "<br>");
a = arr.join(" ");
document.write("<h1>String:</h1> " + a);

//Task 13

//13.Create a new array. Store values one by one in such a way that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[0] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[3] + "<br>");

//Task 14

//14.Create a new array. Store values one by one in such a way that you can access the values in reverse order
//(Last In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[3] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[0] + "<br>");

//Task 15

//15.Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your browser using document.write() method:

let arr = ["Apple", 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// document.write("<ul><li>" + arr[0] + "</li> <li>" + arr[1] + "</li> <li>" + arr[2] + "</li><li>" + arr[3] + "</li><li>" + arr[4] + "</li><li>" + arr[5] + "</li></ul>")
document.getElementById('apple').innerHTML = arr[0];
document.getElementById('samsung').innerHTML = arr[1];
document.getElementById('motorola').innerHTML = arr[2];
document.getElementById('nokia').innerHTML = arr[3];
document.getElementById('sony').innerHTML = arr[4];
document.getElementById('haier').innerHTML = arr[5];

//CHAPTER # 17 TO 20

//Task 1

//1. Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("Declare and initialize an empty multidimensional array. (Array of arrays)<br>Check the code")
let arr = [
    [],
    [],
    [],
    [],
    [],
    [],
];

//Task 2

//2.Declare and initialize a multidimensional array representing the following matrix:
let arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write(arr[0][0] + " ");
document.write(arr[0][1] + " ");
document.write(arr[0][2] + " ");
document.write(arr[0][3] + "<br>");
document.write(arr[1][0] + " ");
document.write(arr[1][1] + " ");
document.write(arr[1][2] + " ");
document.write(arr[1][3] + "<br>");
document.write(arr[2][0] + " ");
document.write(arr[2][1] + " ");
document.write(arr[2][2] + " ");
document.write(arr[2][3] + "<br>");

//Task 3

//3. Write a program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Task 4

//4.Write a program to print multiplication table of any number using for loop.
//Table number & length should be taken as an input from user

var num = +(prompt("Enter a number to show its multiplication table"));
var length = +(prompt("Enter length multiplication table"));
for (var i = 1; i <= length; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 5

//5.Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

//Task 6

//6.Generate the following series in your browser. See example output. 
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k,");
}

//Task 7

//7.You have an array 
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable“ search by user input” in an array.After searching,
//prompt the user whether the given item is found in the list or not.Example:

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var customer = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
if (customer == A[0]) {
    alert(customer + " is available at index 0 in our bakery ");
} else if (customer == A[1]) {
    alert(customer + " is available at index 1 in our bakery ");
} else if (customer == A[2]) {
    alert(customer + " is available at index 2 in our bakery ");
} else if (customer == A[3]) {
    alert(customer + " is available at index 3 in our bakery ");
} else if (customer == A[4]) {
    alert(customer + " is available at index 4 in our bakery ");
} else {
    alert("We are sorry." + customer + " is not available in our bakery");
}

//Task 8

//8. Write a program to identify the largest number in the given array. 
//A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 91 && A[i] > 90) {
        document.write("The largest number is " + A[i]);
    }
}

//Task 9

//9. Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 12 && A[i] < 13) {
        document.write("The smallest number is " + A[i]);
    }
}

//Task 10

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("Write a program to print multiples of 5 ranging 1 to 100<br><br>");

for (var i = 1; i <= 20; i++) {
    var j = 5 * i;
    document.write(j + ",");
}

// CHAPTER # 21 TO 25

//Task 1
/*1. Write a program that takes two user inputs for first and last name using prompt and
merge them in a new variable titled fullName. Greet the user using his full name.*/

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname + " " + lname;
alert("Good Morning! " + fullName);

//Task 2
/*2. Write a program to take a user input about his favorite mobile phone model.
Find and display the length of user input in your browser*/

var mobileModel = prompt("Enter Your Favorite Mobile Phone Model");
document.write("My favorite phone is: " + mobileModel + "<br>");
var mobileLength = mobileModel.length
document.write("Length of String: " + mobileLength);

//Task 3
/*3. Write a program to find the index of letter “n” in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Index of 'n': " + name.indexOf('n'));

//Task 4
/*4. Write a program to find the last index of letter “l” in the word “Hello World” and display
the result in your browser */

var greet = 'Hello World';
document.write("String: " + greet + "<br>Last Index of 'l': " + greet.lastIndexOf('l'));

//Task 5
/*5. Write a program to find the character at 3rd index in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Character at Index 3: " + name.charAt(3));

//Task 6
//6.Repeat Q1 using string concat() method.

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname.concat(" ", lname);
alert("Good Morning! " + fullName);

//Task 7
/*7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display
the result in your browser*/

var city = 'Hyderabad';
document.write("City: " + city);
var cityHyder = city.slice(0, 5);
var cityIslam = cityHyder.replace(cityHyder, 'Islam');
var abad = city.slice(5);
var cityReplace = cityIslam + abad
document.write("<br>After Replacement: " + cityReplace);

//Task 8
/*8.Write a program to replace all occurrences of “and” in the string with “&” and display the
result in your browser. var message = “Ali and Sami are best friends. They play cricket and 
football together.”; */

var message = "Ali and Sami are best friends.They play cricket and football together.";
var replaceMessage = message.replace(/and/g, '&');
document.write(replaceMessage)

//Task 9
/*9. Write a program that converts a string “472” to a number 472.
Display the values & types in your browser. */

var number = 472;
var convertNumber = number.toString();
var a = typeof(convertNumber);
document.write("Value: " + number + "<br>Type: " + a);
var string = "472";
var convertString = parseInt(string);
var b = typeof(convertString);
document.write("<br>Value: " + string + "<br>Type: " + b);

//Task 10
/*10.Write a program that takes user input. Convert and show the input in capital letters. */

var userInput = prompt("Enter Any Dry Fruits Name");
document.write("User Input: " + userInput);
var upper = userInput.toUpperCase();
document.write("<br>Upper Case: " + upper);

//Task 11
/*11.Write a program that takes user input. Convert and show the input in title case */

var userInput = prompt("Enter Your Favorite Programming Language");
document.write("User Input: " + userInput)
var firstLetter = userInput.slice(0, 1);
var otherLetters = userInput.slice(1);
var ProgrammingLanguage = firstLetter.toUpperCase() + otherLetters
document.write("<br>Title Case: " + ProgrammingLanguage);

//Task 12
/*12. Write a program that converts the variable num to string.
var num = 35.36 ; Remove the dot to display “3536” display in your browser */

var num = 35.36;
document.write("Number: " + num + "<br>");
var string = num.toString();
var stringStart = string.slice(0, 2);
var stringEnd = string.slice(3);
var strings = stringStart + stringEnd;
document.write("Result: " + strings);

//Task 13
/*13. Write a program to take user input and store username in a variable.
If the username contains any special symbol among [@ . , !], prompt the user to enter a valid
username.
For character codes of [@ . , !]*/

var userInput = prompt("Enter User Name");
var atTheRate = '@';
var fullStop = '.';
var comma = ',';
var exclaminationMark = '!';
for (var i = 0; i < userInput.length; i++) {
    var check = userInput.charAt(i)
    if (check == atTheRate || check == fullStop || check == comma || check == exclaminationMark) {
        alert("Enter a valid User Name");

    }

}

//Task 14
/*14. You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program  should inform about its availability. Example: */

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var changeCase = userInput.toLowerCase();
switch (changeCase) {
    case 'cake':
        document.write("cake is <b>available</b> at index 0 in our bakery<br>");
        break;
    case 'apple pie':
        document.write("apple pie is <b>available</b> at index 1 in our bakery<br>");
        break;
    case 'cookie':
        document.write("cookie is <b>available</b> at index 2 in our bakery<br>");
        break;
    case 'chips':
        document.write("chips is <b>available</b> at index 3 in our bakery<br>");
        break;
    case 'patties':
        document.write("patties is <b>available</b> at index 4 in our bakery<br>");
        break;
    default:
        document.write(changeCase + " is not <b>available</b> in our bakery<br>");
        break;
}

//Task 15
/*15. Write a program to take password as an input from user.
The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number
c. It must at least 6 characters long 
If the password does not meet above requirements,prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.*/

var password = prompt("Enter Your Password");
var passwordLength = password.length;
var smallLetters = /[a-z]/g;
var capitalLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if ((password.match(smallLetters) || password.match(capitalLetters)) && password.match(numbers)) {
    var notDigit = password.charAt(0);
    if (notDigit != 0 && notDigit != 1 && notDigit != 2 && notDigit != 3 && notDigit != 4 && notDigit != 5 && notDigit != 6 && notDigit != 7 && notDigit != 8 && notDigit != 9) {
        if (passwordLength > 5) {
            document.write("Enter Password: " + password);
            document.write("<br>Password Created");
        } else {
            document.write("Enter Password: " + password);
            document.write("<br>Minimum password length is 6");
            document.write("<br>Please enter a Valid Password");

        }
    } else {
        document.write("Enter Password: " + password);
        document.write("<br>Password can not begin with a number");
        document.write("<br>Please enter a Valid Password");
    }
} else {
    document.write("Enter Password: " + password);
    document.write("<br>Password should contain alphabets and numbers");
    document.write("<br>Please enter a Valid Password");

}

//Task 16
/*16. Write a program to convert the following string to an array using string split method. 
var university = “University of Karachi”;
Display the elements of array in your browser.  */

var university = 'University of Karachi';
let char = university.split('');
for (var i = 0; i < 21; i++) {
    document.write(char[i] + "<br>");

}
let arr = university.split();
console.log(arr);

//Task 17
/*17. Write a program to display the last character of a user input. */

var userInput = prompt("Enter any country name");
let firstCapital = userInput.slice(0, 1);
let otherLetters = userInput.slice(1);
let join = firstCapital.toUpperCase() + otherLetters;
document.write("User Input: " + join);
let lastCharcter = userInput.charAt(userInput.length - 1);
document.write("<br>Last Charcter of input: " + lastCharcter);

//Task 18
/*18. You have a string “The quick brown fox jumps over the lazy dog”.
Write a program to count number of occurrences of word “the” in given string. */

let string = 'The quick brown fox jumps over the lazy dog';
document.write("Text: " + string);
let lowerString = string.toLowerCase();
let countVariable = (lowerString.match(/the/g)).length;
document.write('<br>There are ' + countVariable + " occurrences of word 'the' ");

//CHAPTER # 26 TO 30

//Task 1
/*1.Write a program that takes a positive integer from user & display the following in your browser. 
a. number
b. round off value of the number 
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any postive integer"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 2
/*2. Write a program that takes a negative floating point number from user & display the
following in your browser. 
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any negative floating point"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 3
/*3. Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

let number = +(prompt("Enter any value to find absolute value"));
let absolute = Math.abs(number);
document.write("absolute value of " + number + " is " + absolute);

//Task 4
/*4. Write a program that simulates a dice using random() method of JS Math class.
Display the value of dice in your browser.: */

let dice = (Math.random()) * 7
let value = Math.floor(dice)
document.write('random dice value: ' + value);

//Task 5
/*5. Write a program that simulates a coin toss using random() method of JS Math class.
Display the value of coin in your browser */

let tail = 1;
let head = 2;
let numberGenerate = (Math.random()) * 3;
let coinToss = Math.floor(numberGenerate);
if (coinToss == 1) {
    document.write(tail + "<br>random coin value: Tail");
} else if (coinToss == 2) {
    document.write(head + "<br>random coin value: Head");
} else {
    document.write("Coin has vanished in System ☺");
}

//Task 6
/*6. Write a program that shows a random number between 1 and 100 in your browser.  */

let number = (Math.random()) * 101;
let floor = Math.floor(number);
document.write("Random number between 1 and 100: " + floor);

//Task 7
/*. Write a program that asks the user about his weight. Parse the user input and display his
weight in your browser.Possible user
inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms  */

let weight = prompt("Enter your weight in kilograms");
document.write("The weight of user is: " + weight);

//Task 8
/*8. Write a program that stores a random secret number from 1 to 10 in a variable.
Ask the user to input a number between 1 and 10. If the user input equals the secret 
number, congratulate the user.  */

let secretNumber = 7;
for (var i = 1; i > 0; i++) {
    let userGuess = +(prompt("Enter a number from 1 to 10"));
    if (userGuess === secretNumber) {
        alert("Congratulation");
        break;
    } else {
        alert("Try Again");
    }
}

//CHAPTER # 31 TO 34

//Task 1
/*1. Write a program that displays current date and time in your browser.  */

let date = new Date();
document.write(date);

//Task 2
/*2. Write a program that alerts the current month in words. For example December. */

let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
let currentMonth = date.getMonth();
alert("Current Month: " + monthsNames[currentMonth]);

//Task 3
/*3. Write a program that alerts the first 3 letters of the current day,
for example if today is Sunday then alert will show Sun.*/

let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let date = new Date();
let today = date.getDay();
alert("Today is " + dayNames[today]);

//Task 4
/*4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. */

let dayNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thrday', 'Friday', 'Satday'];
let date = new Date();
let today = date.getDay();
if (dayNames[today] == 'Sunday') {
    alert("It's Fun Day");
}

//Task 5
/*5. Write a program that shows the message “First fifteen days of the month” if the date is
less than 16th of the month else shows “Last days of the month”. */

let date = new Date();
let day = date.getDate();
if (day < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");

}

//Task 6
/*6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it
to a variable that hasn't been declared beforehand.
Use any variable you like to represent the Date object */

let todayDate = new Date();
document.write("Current Date: " + todayDate);
let miliseconds = todayDate.getTime();
document.write("<br>Elasped miliseconds since January 1, 1970: " + miliseconds);
let minutes = miliseconds / (60 * 60);
document.write("<br>Elasped minutes since January 1, 1970: " + minutes);

//Task 7
/*7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

let todayDate = new Date();
let time = todayDate.getHours();
if (time >= 0 && time < 12) {
    alert("It's AM");

} else if (time >= 12 && time < 24) {
    alert("It's PM");
}

//Task 8
/*8.Write a program that creates a Date object for the last day of the last month of 2020 and
assigns it to variable named laterDate. */

let date = new Date(2020, 11, 31);
document.write("Later date: " + date);

//Task 9
/*9. Create a date object of the starting date of this Ramadan and alert the number of days
past since 1st Ramadan? 
Note: 1st Ramadan was on June 18, 2015 */

let firstRamdan = new Date(2015, 6, 12);
let date = new Date(2015, 11, 30);
let miliseconds = date - firstRamdan;
let milisecondsConvertIntoDays = miliseconds / 8.64e+7;
alert(milisecondsConvertIntoDays + " days have passed since 1st Ramdan, 2015");

//Task 10
/*10. Write a program that displays in your browser the seconds that elapsed between the
reference date and the  beginning of 2015.  */

let referenceDate = new Date(2015, 11, 5, 22, 50, 16);
document.write("On Refernce Date: " + referenceDate);
let beginningDate = new Date(2015, 0, 1, 0, 0, 0);
let miliseconds = referenceDate - beginningDate;
let seconds = miliseconds / (60000);
let ceilSeconds = Math.ceil(seconds);
document.write("<br>" + ceilSeconds + " seconds had passed since beginning of 2015");

//Task 11
/*11.Create a Date object for the current date and time.Extract the hours, reset the date
object an hour ahead and finally display the date object in your browser. */

let currentDate = new Date();
let resetHour = new Date();
resetHour.setHours(2);
document.write("Current Date: " + resetHour);
document.write("<br>1 hour ago, it was: " + currentDate);

//Task 12
/*12. Write a program that creates a date object and show the date in an alert box that is
reset to 100 years back?  */

let currentDate = new Date();
let resetYears = new Date();
resetYears.setFullYear(1920);
alert("Current Date: " + currentDate + "\n100 years back, it was: " + resetYears);

//Task 13
/*13. Write a program to ask the user about his age. Calculate and show his birth year in
your browser. */

let age = +(prompt("Enter Your Age"));
let year = new Date();
let currentYear = year.getFullYear();
let birthYear = currentYear - age;
document.write('Your Age is: ' + age + "<br>Your Birth Year is: " + birthYear);

//Task 14
/*4. Write a program to generate your K-Electric bill in your browser.
All the amounts should be rounded off to 2 decimal places. Display the following fields: 
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) */

let name = prompt("Enter Your Name");
let firstCapital = name.slice(0, 1);
let otherLetters = name.slice(1);
var fullname = firstCapital.toUpperCase() + otherLetters;
let month = prompt("Enter Current Month Name");
let startLetter = month.slice(0, 1);
let othersAlphabate = month.slice(1);
var MonthName = startLetter.toUpperCase() + othersAlphabate;
let numberOfUnits = +(prompt("Enter Number Of Units"));
let ChargesPerUnit = 16;
let netAmountPayable = numberOfUnits * ChargesPerUnit;
let LatePaymentSurcharge = 350;
let GrossAmountPayable = netAmountPayable + LatePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>" + fullname + "</b><br>Month: <b>" + MonthName + "</b><br>Number of Units: <b>" + numberOfUnits + "</b><br>Charge Per Unit: <b>" + ChargesPerUnit + "</b>");
document.write("<br><br>Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>Late Payment Surcharge: <b>" + LatePaymentSurcharge + "</b>");
document.write("<br>Gross Amount Payable (after Due Date): <b>" + GrossAmountPayable + "</b>")

//CHAPTER # 35 TO 38

//Task 1
/*1. Write a function that displays current date & time in your browser. */

function dateTime() {
    let currentDate = new Date();
    return document.write(currentDate);
}
dateTime();


//Task 2
/*2. Write a function that takes first & last name and then it greets the user using his full name */

function greet(a, b) {

    let firstCapital = a.slice(0, 1);
    let otherLetters = a.slice(1);
    var firstName = firstCapital.toUpperCase() + otherLetters;
    let firstAlphabate = b.slice(0, 1);
    let othersAlphabate = b.slice(1);
    var LastName = firstAlphabate.toUpperCase() + othersAlphabate;
    let fullName = firstName.concat(" " + LastName);
    return alert("Good Moring " + fullName);
}
let first = prompt("Enter First Name");
let last = prompt("Enter Last Name");
greet(first, last);

//Task 3
/*3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.*/

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));

function add(a, b) {
    return a + b;
}
document.write("The sum of two numbers: " + add(num1, num2));

//Task 4
/*4. Calculator:  
Write a function that takes three arguments num1, num2 & operator & compute the desired
operation. Return and show the desired result in your browser. */

function Calculator(a, b, c) {
    if (b == '+') {
        return a + c;
    } else if (b == '-') {
        return a - c;
    } else if (b == '*') {
        return a * c;
    } else if (b == '/') {
        return a / c;
    } else if (b == '%') {
        return a % c;
    }
}

let num1 = +(prompt("Enter First Number"));
let num2 = +(prompt("Enter Second Number"));
let operator = prompt("Select any operator\n+ - * / %");

let ans = Calculator(num1, operator, num2);
document.write("The answer is: " + ans);

//Task 5
//5. Write a function that squares its argument.

function squares(a) {
    return a * a;
}
let num = +(prompt("Enter any number to find its square"));
let square = squares(num);
document.write("The square of " + num + " is: " + square);

//Task 6
/*6. Write a function that computes factorial of a number */

function factorial(n) {

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);

}

let num = +(prompt("Enter any number to find its Factorial"));
let facNum = factorial(num);
document.write("The Factorial of " + num + " is: " + facNum);

//Task 7
/*7. Write a function that take start and end number as inputs & display counting in your browser. */

function counting(a, b) {
    for (var i = a; i <= b; i++) {
        document.write(i + "<br>");
    }
}
let StartNum = +(prompt("Enter Start Number"));
let EndNum = +(prompt("Enter End Number"));
counting(StartNum, EndNum);

//Task 8
/*8. Write a nested function that computes hypotenuse of a right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare()  */

function calculateHypotenuse(a, b) {
    function calculateSquare(a, b) {
        var PerpendicularSquare = a * a;
        var BaseSquare = b * b;
        var squareValues = PerpendicularSquare + BaseSquare;
        var sqrt = Math.sqrt(squareValues);
        return sqrt.toFixed(2);
    }
    return calculateSquare(a, b);
}

let base = +(prompt("Enter Base Value of Right Angle Triangle"));
let perpendicular = +(prompt("Enter Perpendicular Value of Right Angle Triangle"));
document.write("The value of Hypotenuse of a Right Angle Triangle " + calculateHypotenuse(perpendicular, base));

//Task 9
/*9. Write a function that calculates the area of a rectangle. 
A = width * height
Pass width and height in following manner: 
i. Arguments as value 
ii. Arguments as variables */

function CalculateArea(a, b) {
    return a * b
}
let height = 45;
document.write("The area of a rectangle is: " + CalculateArea(5, height));

//Task 10
/* 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as  forward, e.g., madam. */

function palindrome(str) {
    let a = str.split('');
    let b = a.reverse();
    let c = b.join('');
    if (str == c) {
        return alert('Yes it is palindrome word');
    } else {
        return alert("No it's not palindrome word");
    }
}
let word = prompt("Enter any word to check it is palindrome or not?");
palindrome(word);

//Task 11
/*11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of
the string in upper case.  
EXAMPLE STRING: 'the quick brown fox'  
EXPECTED OUTPUT :'The Quick Brown Fox */

function upperCase(str) {
    var array = str.split(' ');
    var Newarr = [];

    for (var i = 0; i < array.length; i++) {
        Newarr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    let upperValues = Newarr.join(' ');
    return alert(upperValues);
}
let sentence = prompt("Enter any sentence");
upperCase(sentence);

//Task 12
/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.  
EXAMPLE STRING: 'Web Development Tutorial'  
EXPECTED OUTPUT :'Development'  */

function LongWord(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for (var i = 0; i < array1.length; i++) {
        if (result.length <= array1[i].length) {
            result = array1[i].charAt(0).toUpperCase() + array1[i].slice(1);
        }
    }
    return result;
}
let sentence = prompt("Enter any sentence");
let long = LongWord(sentence);
alert("The longest Word is: " + long);

//Task 13
/*13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the
number of occurrences of the specified letter within the string.  
Sample arguments : 'JSResourceS.com', 'o' */

function count(a, b) {
    let countVariable = 0
    let lowerString = a.toLowerCase();
    for (var i = 0; i < lowerString.length; i++) {
        if (b == lowerString.charAt(i)) {
            countVariable += 1;
        }

    }
    return document.write('There are ' + countVariable + " occurrences of word " + b + "<br>Text: " + a);
}
let string = prompt("Enter any sentence");
let letter = prompt("Enter any letter to find in your sentence");
count(string, letter);

//Task 14
/*14. The Geometrizer 
Create 2 functions that calculate properties of a circle, using 
the definitions here. Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN". */

function calcCircumference(r) {
    let circumferenceOfCircle = 2 * Math.PI * r;
    let twoDecimal = circumferenceOfCircle.toFixed(2)
    return document.write("The Circumference is: " + twoDecimal);
}

function calcArea(r) {
    let AreaOfCircle = Math.PI * r * r;
    let twoDecimal = AreaOfCircle.toFixed(2)
    return document.write("<br>The Area is: " + twoDecimal);
}

let radius = +(prompt("Enter Radius Value"));
calcCircumference(radius);
calcArea(radius);

// CHAPTER 38-44 
// Task 1
// 1. Write a custom function power(a,b), to calculate the value of a raised to b

function power(a, b) {
    var pow = Math.pow(a, b);
    document.write("The power of " + a + " is: " + pow);
}

let number = prompt("Enter any number");
let pow = prompt("Enter power");
power(number, pow);

// Task 2
// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

var year = +(prompt("Enter any year to find its leap year or not"));
var monthNumsWith31 = [2000, 2004, 2008, 2012, 2016, 2020, 2024];

function leapYear(year1) {

    if (year1 % 4 == 0) {
        if (year1 % 100 == 0) {
            if (year1 % 400 == 0) {
                return document.write("This " + year1 + " is leap year");

            } else {
                return document.write("This " + year1 + " is not leap year");
            }
        } else {
            return document.write("This " + year1 + " is leap year");

        }
    } else {
        return document.write("This " + year1 + " is not leap year");
    }
}
leapYear(year);

// Task 3
// 3. If the length of the sides of a triangle are denoted by a,b, and c then area of triangle is given by:
// area = S(S-a)(S-b)(S-c)
// where S = (a + b + c)/ 2

let per = +(prompt("Enter perpendicular value of triangle"));
let hypt = +(prompt("Enter hypotenuse value of triangle"));
let base = +(prompt("Enter base value of triangle"));

function Average(a, b, c) {
    let sum = ((a + b + c) / 2);
    return sum;
}

function area(a, b, c) {
    let S = Average(a, b, c);
    let area = S * (S - a) * (S - b) * (S - c);
    return area.toFixed(2);
}
let answer = area(per, hypt, base);
document.write("The Area of Triangle is: " + answer);

// Task 4
// 4. write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks.
// there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunciton

let sub1 = +(prompt("Enter first subject marks"));
let sub2 = +(prompt("Enter second subject marks"));
let sub3 = +(prompt("Enter third subject marks"));

function average(a, b, c) {
    let avr = (a + b + c);
    return Math.round(avr);
}

function percentage(a, b, c) {
    let TM = 300;
    let OM = average(a, b, c);
    let per = (OM / TM) * 100;
    return per.toFixed(2);
}

function mainFunciton(a, b, c) {
    let avr = average(a, b, c);
    let per = percentage(a, b, c);
    document.write("Your marks is: " + avr + "<br>Your percentage is: " + per + "%");
}
mainFunciton(sub1, sub2, sub3);

// Task 5
// 5. You have learned the function indexOf. Code you rown custom function that will perform the same functionally.
// You can code for single character as of now.

let word = prompt("Enter any Word");
var char = prompt("Enter character of Word");

function indexOf(a) {
    let array = []
    let slice
    for (var i = 0, j = 1; i < word.length, j <= word.length; i++, j++) {
        slice = word.slice(i, j)
        array.push(slice)
        if (array[i] == a) {
            document.write("The index of " + char + " is: " + i);
            break;
        }
    }
}
indexOf(char);

// Task 6
// 6. write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long

function vowelsRemover(input) {
    if (sentence.length <= 25) {
        return input.replace(/[aeiouAEIOU]/g, "");
    } else {
        return "Sentence is very long";
    }
}
let sentence = prompt("Enter any sentence");
let withoutVowels = vowelsRemover(sentence);
document.write(withoutVowels);

// Task 7
// 7. write a function with switch statements to count the number of occurrences of any two vowels in succession in aline of text.
// For example, in the sentence
// "please read this application and give me gratuity"
// such occurrences are ea, ea, ui


let input = prompt("Enter any line");

function findOccurrences(stri) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        let a = input[i];
        switch (a) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                count++;
        }
    }
    return document.write("There are " + count + " vowels in this sentence <q>" + input + "</q>");
}
findOccurrences(input);

// Task 8
// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters,
// feet, inches and centimeters.

let distance = +(prompt("Enter the distance between two citites in km"));

function meter(value) {
    let ans = value * 1000;
    document.write("The distance in meter is: " + ans + "<br>");
}

function feet(value) {
    let ans = value * 3281;
    document.write("The distance in feet is: " + ans + "<br>");
}

function inches(value) {
    let ans = value * 39370;
    document.write("The distance in inches is: " + ans + "<br>");
}

function centimeters(value) {
    let ans = value * 100000;
    document.write("The distance in centimeters is: " + ans + "<br>");
}

document.write("You enter " + distance + "Km<br>");
meter(distance);
feet(distance);
inches(distance);
centimeters(distance);

// Task 9
// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40
// hours. Assume that employees do not work  for fractional part of an hour.

let hours = +(prompt("Enter your working hours"));
let overtime;
let rate = 12;
while (true) {
    if (hours > 40) {
        overtime = hours - 40;
        let pay = overtime * rate;
        document.write("Your overtime pay is: " + pay + "<br>");
        break;
    } else if (hours <= 40) {
        document.write("You have to work for more than 40 hours to get over time");
        break;
    }
}

// Task 10
// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

let amount = +(prompt("Enter amount to withdraw!!"));

function cashier() {
    let hundredNote = amount / 100;
    let hundred = Math.floor(hundredNote) * 100;
    let remainingAmount = amount - hundred;
    let fiftyNote = remainingAmount / 50;
    let fifty = Math.floor(fiftyNote) * 50;
    let remaingMoney = amount - (hundred + fifty);
    let tenNote = remaingMoney / 10;

    document.write("<strong>You will have " + Math.floor(hundredNote) + " hundred notes " + Math.floor(fiftyNote) + " fifty notes " + tenNote + " ten notes</strong>");
}
cashier();


// CHAPTER 43 - 48
// Task 1

// 1. Show an alert box on click on a link

function clickMe() {
    alert("You are handsome ☺")
}

// Task 2
// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function MobilePurchase() {
    alert("Thanks for Purchasing a phone from us")
}

// Task 3
// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row
// should be deleted.

var index, table = document.getElementById('myTable');
for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[3].onclick = function() {
        index = this.parentElement.rowIndex;
        table.deleteRow(index)
    }
}

// Task 4
// 4. Display an image in browser. Change the picture on mouseover and set the firstpicture on mouseout.

function changeImage(imageSource) {
    let a = document.getElementById('imag');
    a.src = imageSource
}

// Task 5
// 5. Show a counter in browser. Counter should increaseon click on increase button and decrease on click on decrease button.
// And show updated counter value in browser.

function increaseBtn() {
    let count = document.getElementById('thisone').innerHTML;
    count++;
    document.getElementById('thisone').innerHTML = count;
}

function DecreaseBtn() {
    let count = document.getElementById('thisone').innerHTML;
    count--;
    document.getElementById('thisone').innerHTML = count;
}


// CHAPTER 49-52

// Task 1
// 1. Create a signup form and display form data in your webpage on submission

function submit() {
    let name = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let paswd = document.getElementById('password').value;
    let confPaswd = document.getElementById('confirmPassword').value;

    document.write("<h3>Your Information is:</h3><br>Name: " + name + "<br>Email: " + email + "<br>Password: " + paswd + "<br>Confirmation Password: " + confPaswd);
}

// Task 2
// 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look.
// When user clicks on “Read more” button, full detail of that particular item will be  displayed.

function ReadMore() {
    let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis perferendis tempore alias iste odit saepe fugiat reiciendis repellendus, atque officiis laboriosam sequi modi hic dolorum laudantium magni recusandae minima praesentium."
    let para = document.getElementById('para');
    para.innerHTML = text;
}

// Task 3
// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details
// and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire
// row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

var selectRow = null;

function onformSubmit() {
    if (incompleteRecord()) {
        var formData = readFormData();
        if (selectRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData)
        }
        ResetRecord();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById('fullName').value;
    formData["contact"] = document.getElementById('contact').value;
    formData["class"] = document.getElementById('class').value;
    formData["age"] = document.getElementById('age').value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.contact
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.class
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="Edit(this)">Edit</a>
                        <a onclick="Delete(this)">Delete</a>`
}

function ResetRecord() {
    document.getElementById('fullName').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('class').value = '';
    document.getElementById('age').value = '';
}

function Edit(td) {
    let selectRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectRow.cells[0].innerHTML;
    document.getElementById('contact').value = selectRow.cells[1].innerHTML;
    document.getElementById('class').value = selectRow.cells[2].innerHTML;
    document.getElementById('age').value = selectRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.fullName;
    selectRow.cells[1].innerHTML = formData.contact;
    selectRow.cells[2].innerHTML = formData.class;
    selectRow.cells[3].innerHTML = formData.age;
}

function Delete(td) {
    if (confirm("Are you sure to delete this record?")) {
        let row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        ResetRecord();
    }
}

function incompleteRecord() {
    let isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("validationError").classList.remove("hide");
        if (document.getElementById("contact").value == "") {
            isValid = false;
            document.getElementById("validationError1").classList.remove("hide");
            if (document.getElementById("class").value == "") {
                isValid = false;
                document.getElementById("validationError2").classList.remove("hide");
                if (document.getElementById("age").value == "") {
                    isValid = false;
                    document.getElementById("validationError3").classList.remove("hide");
                }
            }
        }
    } else {
        isValid = true;
        if (!document.getElementById('validationError').classList.contains("hide")) {

            document.getElementById("validationError").classList.add("hide");
        }
    }
    return isValid;
}


//Chapter 53 - 57

//Task 1
//1.Consider you have 4 images in a file Now When you click on an image it should display in a modal.:

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");

let array = [img, img2, img3, img4, img5];
for (var i = 0; i < array.length; i++) {
    array[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}


//Task 2
// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

let increaseSize = 20
let decreaseSize;

function zoomIn() {
    if (increaseSize <= 100) {
        let a = document.getElementById('peragraph')
        a.style.fontSize = `${increaseSize}px`
        increaseSize = increaseSize + 10;
    } else if (increaseSize > 100) {
        alert("Can't more Zoom In")

    }
    decreaseSize = increaseSize - 10;
}

function zoomOut() {
    if (decreaseSize <= 100) {
        let a = document.getElementById('peragraph')
        a.style.fontSize = `${decreaseSize}px`
        decreaseSize = decreaseSize - 10
    }
    increaseSize = decreaseSize + 10;
}

// CHAPTER # 58 - 67

// Task 1
// Consider you have following code snippet
// 1. Get element of id “main-content” and assign them in a variable. 
// 2. Display all child elements of “main-content” element. 
// 3. Get all elements of class “render” and show their innerHTML in browser.
// 4. Fill input value whose element id first-name using javascript
// 5.Repeat part iv for id ”last-name” and “email”

let mainContent = document.getElementById('main-content');
let childElements = mainContent.getElementsByTagName('p');
console.log(childElements);
let render = mainContent.getElementsByClassName('render');
for (var i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>")
}
let firstName = prompt("Enter First Name");
let lastName = prompt("Enter Last Name");
let email = prompt("Enter Email");
let formContent = document.getElementById('form-content');
let child = formContent.getElementsByTagName('input');
child[0].value = firstName;
child[1].value = lastName;
child[2].value = email;


// Task 2
// 2. use HTML code of question 1 and  show the result on browser
//i. What is node type of  element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblingse of id “lastName”.
// vi. Get parent node and node type of element having id “email”

let formContent = document.getElementById('form-content');
console.log(formContent.nodeType); //Ans is 1 the node is an element node
let lastName = document.getElementById('lastName');
console.log(lastName.nodeType) //Ans is 1 the node is an element node
console.log(lastName.childNodes[0].nodeType) //Ans is 3 the node is a text node
var mainContent = document.getElementById('main-content');
console.log(mainContent.firstChild); //text
console.log(mainContent.lastChild); //text

console.log(lastName.nextSibling); // text
console.log(lastName.previousSibling); //text

let email = document.getElementById('email');
console.log(email.parentNode)
console.log(email.nodeType) //Ans is 1 the node is an element node