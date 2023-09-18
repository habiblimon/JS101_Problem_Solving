///////////////////////////////////////////////////////////////
//
///////////////////////////////



//  01.Solve the problem with Javascript  to find the maximum between two numbers.

let numOne = 10;
let numTwo =5;
let numThree = 15;

console.log(Math.max(numOne, numTwo));


//02. Solve the problem with Javascript  to find a maximum between three numbers.
console.log(Math.max(numOne, numTwo, numThree));




//03. Solve the problem with Javascript  to check whether a number is negative, positive or zero.

let number = 1;
if (number > 0){
    console.log("This number is positive");
}else if(number == 0){
    console.log("This number is Zero");
}else{
    console.log("This number is Negative!")
}



// 04. Solve the problem with Javascript  to check whether a number is divisible by 10 or not.

let numDivisible = 30;
let resultDivisible = numDivisible % 10;

if(resultDivisible == 0){
    console.log("This number divisible by 10");
}else{
    console.log("This number Not divisible by 10 !")
}


//05. Solve the problem with Javascript  to check whether a number is even or odd.

let EvenOrOdd = 5;
let resultEvenOrOdd = EvenOrOdd % 2;

if(resultEvenOrOdd == 0){
    console.log(EvenOrOdd +" is even number");
}else{
    console.log(EvenOrOdd +" is odd number !");
}


//06 Solve the problem with Javascript  to check whether a character is in the alphabet or not.
let character = 'M';
let resultCharacter = /^[A-Za-z]$/.test(character);  // write - /^[A-Za-z]$/.test(value)

if (resultCharacter) {
  console.log(character + " is an alphabet character.");
} else {
  console.log(character + " is not an alphabet character.");
}



//07. Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , any other value is normal)


let temperature = 27;

if(30 <= temperature){
    console.log("Temperature is Hot");
}else if(25 >= temperature){
    console.log("Temperature is Cold");
}else{
    console.log("Temperature is Normal");
}


// 08. Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.

// Find out if the average grade:
// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


let math = 10;
let english = 40;
let physics =10;
let avgGrade = (math+english+physics)/3;

if(avgGrade >= 90){
    console.log("Grade A");
} 
else if(avgGrade >= 80)
{
    console.log("Grade B");
}
else if(avgGrade >= 70)
{
    console.log("Grade C");
}
else if(avgGrade >= 60)
{
    console.log("Grade D");
}
else if(avgGrade >= 40)
{
    console.log("Grade E");
}else{
    console.log("Grade F");
}


// 09. Find the random number between 1 to 10

let randomNumber = Math.random()*11; //0 to 1. 
console.log("Random number between 1 to 10 : "+Math.round(randomNumber));


//10. Create a for loop where it prints out the even number only between number 10 to 50.
for (let count = 10; count<=50; count++){
    console.log(count);
}


////////////////////////////////////////////////////
//String Only
///////////////////////////////////////////////////








  

