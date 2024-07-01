//chapter 31
// getting current date and time

// let rightNow = new Date();//use to find date
// document.write(rightNow)


// var dateString = rightNow.toString();
// document.write( "<br>"+ dateString);


// // only represent day
// var rightNow = new Date();
//  var theDay = rightNow.getDay();
//  console.log(theDay);

// //only represent hours
//  var rightNow = new Date();
//  var theDay = rightNow.getHours();
//  console.log(theDay);
// //ONLY REPRESENT MONTH
//  var rightNow = new Date();
//  var theDay = rightNow.getMonth();
//  console.log(theDay);



//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday);//ITS SHOW NAME OF DAY NOT NUMBER



// var dayNames = ["Jan", "Feb", "March", "April", "May", "June", "July"];
// var now = new Date();
//  var theDay = now.getMonth();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday);//ITS SHOW NAME OF month NOT NUMBER



// var d = new Date();
//  var currentMonth = d.getMonth();
// // getDate gives you a number for the day of the month.
// console.log(currentMonth);
// var dayOfMonth = d.getDate();
// // getFullYear gives you a 4-digit number for the year.
// var currYr = d.getFullYear();
// console.log(currYr);

// // getHours gives you a number from 0 through 23 corresponding to midnight through 11
// // p.m.
// var currentHrs = d.getHours();
// console.log(currentHrs);
// // getMinutes gives you a number from 0 through 59.
// var currMins = d.getMinutes();
// console.log(currMins);
// // getSeconds gives you a number from 0 through 59.
// var currSecs = d.getSeconds()
// console.log(currSecs);
// // getMilliseconds gives you a number from 0 through 999.

// var currMills = d.getMilliseconds();
// console.log(currMills);
// // getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1,
// // 1970.
// var millsSince = d.getTime();
// console.log(millsSince);

// //enter date as your choice
// let today = new Date();
// let theday = new Date("June 21 ,2029");
// console.log(theday);
// //convet all tym in millisecond
// var msToday = today.getTime();
//  var msDoomsday = theday.getTime();
//  console.log(msToday);
//  console.log(msDoomsday);




 //Changing elements of a date and time

 let d = new Date();
 d.setFullYear(2005);

 

 //to  set month
 d.setMonth(5)
 //to set date
d.setDate(15)
d.setSeconds(29)
d.setHours(4)
d.setSeconds(24)


console.log(d);


//Function in JS;block of code that performs a specific task, can be invoked whenever needed
//give input or show output

function myFunction(){
console.log("hello world");
console.log("i love js");
}

myFunction();//if we dont write this log statment not show on our console screen


function tellTime() {
    var now = new Date();
     var theHr = now.getHours();
     var theMin = now.getMinutes();
    alert("Current time: "+ theHr + ":" + theMin);
    }
tellTime();



function myFunction(a,b){//parameter:value that pass in bracket
    console.log(a+b);

}

myFunction(4,7);//if we write any value or num in a bracte is called Argument

//RETURN;AST STATMENT WORK ONLY IN FUNCTION..The return statement stops the execution of a function and returns a value.
function sum(x,y){
    s= x+y;//code written in function is call SCOPE
    return s //return give the value back from function
}

let value = sum(67,89);
console.log(value);
//convert fahrenheit to celsius:
function fahrenheitToCelsius(fahrenheit){
    return(5/9)*(fahrenheit-32);

}
console.log(fahrenheitToCelsius(57));
  

function square(a){
    return a *a;

}
console.log(square(6));
console.log(square(12));

///factorial;math expression 
let n = 7;
function factorial(n) { 
    if (n === 0 || n===1) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));



//ARROW FUNCTIONS"=>":Arrow function {()=>} is concise way of writing JavaScript functions in shorter way.Arrow functions were introduced in ES6.
//Arrow functions allow us to write shorter function syntax


const additionOfNum = (a,b)=>{
    return a+b;

}                                         
 console.log(additionOfNum(23,78));

