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
    var greeting= "Were so glad you're here " + userName + "!";
    return greeting;
}
if (userName == students[1] || userName == students[2] || userName == students[0]){
    document.getElementsByClassName("javascriptOutput")[0].innerHTML=testFunction(userName) + " I remember you! Your crazy cat number is " + crazyFactor ;
} else if (userName == instructors [0]) {
    document.getElementsByClassName("javascriptOutput")[0].innerHTML=testFunction(userName) + " I see you've come to check up on things... Your crazy cat number is " + crazyFactor ;
} else {
    document.getElementsByClassName("javascriptOutput")[0].innerHTML=testFunction(userName) + " Welcome! Your crazy cat number is " + crazyFactor ;
}
document.getElementsByTagName("H2")[0].innerHTML="Hello " + userName + "!";
switch (true) {
    case (crazyFactor > 400):
        console.log ('These people are lying');
        break;
    case (crazyFactor < 400):
        console.log ('These people might be telling the truth');
        break;
    case (crazyFactor = 400):
        console.log ("That is improbable");
        break;
    default:
        console.log ("Something didn't get done");
}
if (crazyFactor > 400) {
    console.log ("Less than 400");
} else if (crazyFactor < 400) {
    console.log ("More than 400");
} else if (crazyFactor = 400) {
    console.log ("This didn't happen before");
} else {
    console.log ("The If statement didn't work");
}