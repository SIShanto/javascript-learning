// basics for learning JavaScript

"use strict";
console.log('hello World');
// declare variables
var firstName='Shanto'; 
// use a variable
console.log(firstName);
// change the value`
firstName="Islam";
console.log(firstName);

                    //  ***Rules for declaring variables*** //

// cannot use start with a number
//  0value (invalid)
// but value0 (valid)
 var value0 =10;
 console.log(value0 **2); // for powering something we have to use double star * . such as (**)//
//Here (value0 ** 2) means {squaring}the value//

// can use only underscore _ or dollar 'symbol'
// first_name(valid)
// _firstname(valid)
// first$name(valid)
// $firstname(valid)
var first$name="shanto";
console.log(first$name);
var $firstname="shanto";
console.log($firstname);
var first_name= "Shafiul";
console.log(first_name);
var _firstname= "Shafiul";
console.log(_firstname);

// cannot use space
// first name(invalid)

// var first_name or first_new_name="shanto" // snake case writting (using underscore)
// var firstName or firstNewName ="shanto" // camelCase writting (using small letter at the beginning and after that using capital letter for new words in the var to understand as *we can't use space for new words for declaring var*)
//*It is a very good practice to use camelCase var declaration*//

                   // declaring variables using (let)

let firstNaame = "Shanto";
firstNaame="JDSF";
console.log (firstNaame);


// declaring constant

const pi = 3.1416;
console.log(pi**2);

// string indexing

let firstLast = "Shanto"; 
// S  h  a  n  t  o
// 0  1  2  3  4  5
console.log (firstLast[3]) //for indexing, we have to use []

// length of the string
// firstLast.length
console.log (firstLast.length);
console.log (firstLast[firstLast.length-1]); // finding the 1st last indexing of a string
// last index : length - 1

// trim (). it is method for removing spaces after and before of a string

let nigga ="    Shanto    ";
console.log (nigga.length);

nigga = nigga.trim();
console.log(nigga.length);
// or we can express it by this way

console.log(nigga.trim().length);

// or we can express it by this way

let kuku = nigga.trim();
console.log (kuku.length);

// toUpperCase

console.log(nigga.toUpperCase());
// to lowerCase
console.log(nigga.toLowerCase());

// slice
// we have to remember two things 
// 1. starting index
// 2. endth index
 let newStr = nigga.slice(0,4); // 'Shan' here 'S' is the starting 0 index but 'n' is the endth index which is 4th and index is 3.
 console.log(newStr);

//  typeof operator

// data types (primitive data types)
// string
// number
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let hhhh ="shanto";
console.log(typeof age);// says what type of operator it is 
// console.log(typeof hhhh);//says what type of operator it is


// convert number to string
 age= age +"";
 console.log (typeof (age)); // it will say it is string

//  another easy way

age = String(age);
console.log (typeof (age)); 

// convert string to number
hhhh = +hhhh;
 console.log(typeof (hhhh)); //it will say number 
 //  another easy way
 hhhh= Number(hhhh);
 console.log(typeof hhhh);

//  string concatenation

// let string1 = "Shanto";
// let string2 = "Islam";

// let fullname = string1 + " " + string2 ;
// console.log (fullname);

let string1 = "20";
let string2 = "50";
let fullname = +string1 +  +string2 ; //this will make string to number and add them.
console.log (fullname);

// template string
 let dkd= 22;
 let ggg= "dkdk";

 let aboutMe = `My name is ${ggg} and I am ${dkd} years old`; //for template string we have to use backticks(` `)//
 console.log (aboutMe);
 console.log (typeof aboutMe, aboutMe);

//  BigInt
// new feature of JS to store big integers

console.log(Number.MAX_SAFE_INTEGER);
let myNumber= 564421623222222003333333n; //we have to use n after BigInt
console.log(myNumber);

// == vs === in booleans
// booleans are only true or false. they are comparison

let num1 =9 ;
let num2 = '9';

console.log(num1==num2); // here '==' will only consider the value. not Data types
console.log(num1===num2); // here '===' will consider the Data types and values as well
// != and !== will also work in same method as == and ===

console.log(num1!=num2); // here '!=' will only consider the value. not Data types
console.log(num1!==num2);

// ternary operator

age = 322;
let drink;

if (age > 300)
{
    drink="blood";
}
else
{
    drink ="water";
}
console.log(drink);

// ternary operator/ conditional opertor

age = 7;
drink = age<=4 ? "milk" : "coffee";
console.log (drink);

// and or operator

let Name ="Shanto";
age = 12;

if (Name[0]==="S" && age<13)
{
    console.log ( "your name starts with S and your age is below 12")
}
if (Name[0]==="S" || age<12)
{
    console.log ( "your name starts with S")
}

// nested if else

//lets make a guessing game

// let winningNumber = 22;
// let guessingNumber= +prompt("Guess a number");

//  if ( guessingNumber===winningNumber)
//  {
//      console.log ('You have guessed the right Number ❤❤');
//  }
// // else{
// //      guessingNumber= guessingNumber>winningNumber? "Too high!!!":"Too low!!!"; // by using ternary operator
// //     console.log(guessingNumber);
// // }
// else{
//      if (guessingNumber>winningNumber)
//      {
//          console.log("Too High!!!!");
//      }
//      else{
//          console.log('Too Low!!!!');
//      }
// }

// switch statement

// let day = +prompt();

// switch(day)
// {
//     case 0:
//         console.log ('Friday');
//         break;
//     case 1:
//         console.log ('Saturday');
//         break;
//     case 2:
//         console.log ('Sunday');
//         break;
//     case 3:
//         console.log ('Monday');
//         break;
//     case 4:
//         console.log ('Tuesday');
//         break;
//     case 5:
//         console.log ('Wednesday');
//         break;
//     case 6:
//         console.log ('Thursday');
//         break;
//     default :
//          console.log('Invalid Day');
//          break;
// }

// while loop

// while(i<=3)
// {
    //     console.log(i);
    //     i++;
    // }
    // console.log (`Current value is ${i}`);
    
    // while loop example
    
let num= 10;
let total = 0;
let i = 0;
    
while (i<=num)
{    
   
    total= total+i;
    i++;

}
console.log(total);

// other math formula way

let Gtotal = (num*(num+1))/2;
console.log (Gtotal);

// for loop
// for ( ;j<=9;j++)
// {
    //     console.log(j);
    // }
    // for loop example
    
 let s=0;
 let j=0;

for(;j<=10;j++)
{
    s=s+j;
}
console.log(s);

// break keyword

// continue key word

// for (let k=0; k<=10;k++)
// {
//     if(k===6)
//     {
//         break; // breaks the loop 
//     }
//     console.log(k);
// }
for (let k=0; k<=10;k++)
{
    if(k===4)
    {
        continue;// continues the loop skipping the value for printing
    }
    if(k===6)
    {
        continue;// continues the loop skipping the value for printing
    }
    if(k===8)
    {
        continue;// continues the loop skipping the value for printing
    }
    console.log(k);
}



for(let l=0;l<10;l++)
{
    console.log("Hello World");
}

let count = 1;
while (count < 10) {
    console.log(count);
    count++; 
};

// do while loop
let d = 12;
do{
    console.log(d);
 d++;
}
while(d<=9);

// do while loop still works in the first place wheather the condition is true or false

                // ** intro to array **//

// how to creat arrays

 let fruit =['am','jam','kola'];
 console.log(fruit);
//  fruit[2]='pepe';
//  console.log(fruit);
 let nm=[1,2,3,4];
 let mixed=[1,1,2,'dhh',null,undefined];
 console.log(mixed); 
 
// array indexing

let obj={}; //object literal
// fruit[3]="kathal";

console.log(fruit);
console.log(typeof fruit);

console.log(Array.isArray(fruit)); //To find it is an array

console.log(Array.isArray(obj));

//    array push/pop
//    array shift/ unshift

// push -----> will add items in last in array

console.log(fruit);
 fruit.push("lau");
 console.log(fruit);

 //pop-----> will remove last element and also store that element
 let poppedFruit=fruit.pop();
 console.log(fruit);
 console.log("The popped fruit is",poppedFruit);

//  shift---> will remove first element from array and also store that element

let shiftedFruit= fruit.shift();
console.log(fruit);
console.log("The shifted fruit is",shiftedFruit);

// unshift is vice versa

// primitive vs reference data type

 num1=7;
 num2= num1;

console.log(num1)
console.log(num2)
num1++;
console.log(num1);
console.log(num2);

// reference types

// array

let array1= ["item1","item2"];
let array2 = array1;

console.log(array1);
console.log(array2);

array1.push("item3");
console.log(array1);
console.log(array2);

// how to clone array
//  how to concatenate two arrays

array1= ["item2","item3"];
// array2= ["item2","item3"];
// array2=array1.slice(0);
// array2 = [].concat(array1);


// new method of cloning an array
// spread oparator
let oneMoreArray=["jjjfd","lll"]
// array2 =[...array1 ,"ishli","egfhoieg"];
array2 =[...array1,...oneMoreArray];

array1.push("item1");
console.log(array1===array2);
console.log(array1);
console.log(array2);


// for loop in array

fruit=["amm","jaam","lichu","kola"];
// console.log(fruit[fruit.length-4]);
// console.log(fruit[fruit.length-3]);
// console.log(fruit[fruit.length-2]);
// console.log(fruit[fruit.length-1]);
let fruit1=[];
for(i=0;i<fruit.length;i++)
{
    fruit1.push(fruit[i]);
}
console.log(fruit1);

// for of loop in array

const animal =["bagh","valluk","ghora"];

for(let g of animal)

{
    console.log(g);
}