//-----------------------------user input and conditional statement----------------------------------

// ques 1
var cityName = prompt("Enter the city name:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome!");
}

// ques 2
var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}

// ques 3
var color = prompt("Enter the color of road traffic signal (red/yellow/green):");


if (color === "red") {
    alert("Must Stop");
} else if  (color=== "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Invalid color entered.");
}

// ques 4
var remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel in your car.");
}

// ques 5

// a.
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ques 6

var subject1Marks = +prompt("Enter marks obtained in subject 1:");
var subject2Marks = +prompt("Enter marks obtained in subject 2:");
var subject3Marks = +prompt("Enter marks obtained in subject 3:");
var totalMarks = +prompt("Enter total marks:");

var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade;
if (percentage >= 80) {
    grade = "A-one";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";

} else {
    grade = "Fail";
}


var remarks;
if (grade === "Fail") {
    remarks = "Sorry, you have failed.";
} else if (grade === "A-one") {
    remarks = "Excellent! ";
} else if (grade === "A") {
    remarks = "Very good! ";
} else {
    remarks = "You need to improve";
}

document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");

//ques 7

var secretNumber = 7; 
var guess = +prompt("Guess the secret number (between 1 to 10):");

if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess.");
}

//ques 8
var number = +prompt("Enter a number:");

       
        if (number % 3 === 0) {
            alert(number + " is divisible by 3.");
        } else {
            alert(number + " is not divisible by 3.");
        }

        //ques 8

        var number = +prompt("Enter a number:");

        if (number % 2 === 0) {
            alert(number + " is an even number.");
        } else {
            alert(number + " is an odd number.");
        }

        //ques 9
        var number = +prompt("Enter a number:");

        if (number % 3 === 0) {
            alert(number + " is divisible by 3.");
        } else {
            alert(number + " is not divisible by 3.");
        }

        //ques 10
        var temperature = +prompt("Enter the temperature:");

      
        if (temperature > 40) {
            alert("It is too hot outside.");
        } else if (temperature > 30) {
            alert("The Weather today is Normal.");
        } else if (temperature > 20) {
            alert("Today’s Weather is cool.");
        } else if (temperature > 10) {
            alert("OMG! Today’s weather is so Cool.");
        } else {
            alert("It is freezing outside!");
        }
        //ques 11
        var num1 = +prompt("Enter the first number:");
        var num2 =+prompt("Enter the second number:");
        var operation = prompt("Enter the operation (+, -, *, /, %):");

      
        var result;
        if (operation === "+") {
            result = num1 + num2;
        } else if (operation === "-") {
            result = num1 - num2;
        } else if (operation === "*") {
            result = num1 * num2;
        } else if (operation === "/") {
            result = num1 / num2;
        } else if (operation === "%") {
            result = num1 % num2;
        } else {
            alert("Invalid operation entered.");
        }

        
        alert("Result: " + result);

       
