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
var fullName=["Austin Smith", "Susan Escobar", "Benita Acosta", "Francine Baillargeon", "Adrain Martinez", "Dakota Colorado"];
var instructors=["Susan"];
var forbidden = "Steve";
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

if ( userName == fullName[1] ||userName == fullName[2] ||userName == fullName[3] ||userName == fullName[4] || userName == fullName[5]){
    var newP = document.createElement ("p");
    var message = document.createTextNode ("You're very specific, aren't you‽");
    var title = document.getElementById ("title");
    newP.appendChild(message);
    document.body.insertBefore(newP, title);
} else if (userName == fullName[0]){
    var newDiv = document.createElement ("div");
    var secret = document.createTextNode ("You've found a Secret")
    var output = document.getElementsByClassName  ("javascriptOutput")[0];
    newDiv.appendChild(secret);
    document.body.insertBefore(newDiv, output);
} else if (userName == forbidden) {
    document.getElementsByTagName("body")[0].innerHTML="YOU'RE NOT WELCOME HERE ";
    document.querySelector("body").setAttribute("style", "color: white; background-color: black");
    console.log ("Something");
} else {
    var subTitle = document.getElementsByTagName ("h2")[0];
    var nothingSpecial = document.createTextNode (" You haven't triggered any special actions");
    document.querySelector("body").setAttribute("style","background-color: aliceblue");
    subTitle.appendChild(nothingSpecial);
}

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr*360/12)+((min*(360/60)/12)+(sec*(360/60)/60));
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runClock () {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runClock, 1000);
