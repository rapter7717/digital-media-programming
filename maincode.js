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
    var secret = document.createTextNode ("You've found a Secret");
    var output = document.getElementsByClassName  ("javascriptOutput")[0];
    newDiv.appendChild(secret);
    document.body.insertBefore(newDiv, output);
} else if (userName == forbidden) {
    document.getElementsByTagName("body")[0].innerHTML="YOU'RE NOT WELCOME HERE! ";
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


var viewClock = prompt("Do you want the time?", "yes");

if (viewClock == "yes"){
    var interval = setInterval(runClock, 1000);
} else {
    document.getElementsByClassName("main")[0].innerHTML="Well then we just won't show it to you... ";
    //was trying to figure out how to add all that html, but that got complex enough that the smarter option was just to remove it.
}


if (students.includes(userName) || fullName.includes(userName) || instructors.includes(userName)) {
    var date = new Date();
    let dy = date.getDate();
    let mth = date.getMonth();
    let yr = date.getFullYear();
    var newDiv = document.createElement ("div");
    newDiv.className = 'datebox';
    var standardDate = document.createTextNode ((mth+1) + "-" + (dy) + "-" + (yr));
    var main = document.getElementsByClassName  ("postclock")[0];
    newDiv.appendChild(standardDate);
    document.body.insertBefore(newDiv, main);
 } else if (fullName.includes(userName)) {

 }

 const testWrapper = document.querySelector(".test-wrapper");
 const testArea = document.querySelector("#test-area");
 const originText = document.querySelector("#origin-text p").innerHTML;
 const resetButton = document.querySelector("#reset");
 const theTimer = document.querySelector(".timer");
 var timer = [0,0,0,0];
 var interval; 
 var timerRunning = false;


function leadingZero (time){
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}

 

function runTimer (){
    let currentTime = leadingZero (timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3] ++;

    timer[0] = Math.floor((timer[3]/100/60));
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}




function spellCheck (){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText){  
        testWrapper.style.borderColor = "green" ;
        clearInterval(interval);
    } else {
        if (textEntered == originTextMatch){
            testWrapper.style.borderColor = "blue";
        } else {
            testWrapper.style.borderColor = "orange";
        }
    }
    console.log (textEntered);
}


function start() {
    let textEnteredLength = testArea.value.length; 
    if (textEnteredLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log (textEnteredLength);
}


function reset (){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}


 testArea.addEventListener("keypress", start, false);
 testArea.addEventListener("keyup", spellCheck, false );
 resetButton.addEventListener("click", reset, false);