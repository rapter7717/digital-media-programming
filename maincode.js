var userName = prompt("Hi! What's your first name?", "Albert");
if (userName === "Smith") {
    alert ("you've made a mistake");
}
console.log(userName);
var numCats = prompt("How many cats do you have?", 800);
console.log(numCats);
var numCatsNum= Number(numCats);
var num = numCatsNum*2;
var crazyFactor = num + numCatsNum;
console.log(num);
var students=["Adrian","Austin","Dakota"];
var instructors=["Susan"];
console.log(students);
function testFunction (userName){
    var greeting= "Hello " + userName + "!";
    return greeting;
}
document.write(testFunction(userName));
if (userName == students[1] || userName == students[2] || userName == students[0]){
    document.write (" I remember you!");
} else if (userName == instructors [0]) {
    document.write (" I see you've come to check up on things...");
} else {
    document.write (" Welcome!");
}
document.write (" Your crazy cat number is " + crazyFactor)
