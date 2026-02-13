// // // // // let marks = 91;
// // // // // if(marks >= 95){
// // // // //     student ="First Position";
// // // // // }
// // // // // else if
// // // // //      (marks >= 90){
// // // // //         student ="Second Position";

// // // // // }
// // // // // else if
// // // // //     (marks > 85){
// // // // //         student="Third Position";
// // // // //  }
// // // // //  else if
// // // // //     (marks >= 60){
// // // // //         student ="pass";
// // // // // }
// // // // // else{
// // // // //     student ="Fail";
// }
// // //// console.log("Student is : ", student);

// // // // let x = 25;
// // // // let result = x >= 18 ? "adult" : "not adult";
// // // // console.log(result);

// // // let x = prompt("");
// // // if(x%5 === 0){
// // //     result ="yes";

// // // }else{
// // //     result="NO"
// // // }
// // // console.log(result);

// // let x= prompt("RESULT");
// // if(x >= 90){
// //     result="A Grade";
// // }
// // else if(x >= 70){
// //     result="B Grade";
// // }
// // else if(x >= 60){
// //     result="C Grade";
// // }
// // else if(x >= 50){
// //     result="D Grade";
// // }
// // else{
// //     result="F Grade";
// // }
// // console.log(result);

// let x = prompt(" ");
// if( x >= 95){
//     Result = "First Position";
// }
// else if
// ( x >= 90){
//     Result = " Second Position";
// }
// else if(x >= 80){
//  Result= " Third Position";
// }

// else if(x >= 60){
//     Result = "Pass";
// }
// else{
//     Result = "Fail";
// }
// console.log(Result);


// let x = 1;
// do{
//     console.log(x);
//     x++;
// }while(x <= 5);
 
// For In lOOOP 
 
//   for(i=1; i <= 100; i++){
//     if(i%2 !== 0){
//     console.log(i);
//     }else{

//     }
    
//   }

// let x = prompt("Guess The Number");
// if( x == 30){
//     Correct = "This is Correct Number";
// }else{
//     Correct = "This is Incorrect number";
// }
// console.log("RESULT : ", Correct);


// Two strings are anagrams if they contain the same characters in the same frequency.
// let str1 , str2  = prompt(" type here ");

// if(str1 === str2){
//     result = "true";

// }
// else{
//     result = "False"
// }
// console.log(result);

// let str = "sahil";
// str.toUpperCase();



// let str = "Sahil Thakur";
// for(let i of str){
//    console.log("", i);
// }

// let student = {
//     Name : "sahil Thakur",
//     class : 10,
//     city : "Delhi",

// };
// for (let key in student){
// console.log(key, student[key]);
// }

// let str = "SAHIL";
// str = str.toLowerCase();
// console.log(str);

// let str = "Sahil";
// str = str.toUpperCase();
// console.log(str);

//  let str = "12345678"
 
//  console.log(str.slice(2, 7) );

// let x = "sahil"

// console.log(x.replace("l", "H" )); 
// let x = "SAHIL"
// console.log(x.charAt(2, 3));

// let x = prompt("Please Enter Your Name");
// let y = "@"+ x ;
// let  z = x.length; 
// console.log(y.concat(z));

// let x =[23, 24,45,56,75,66];
// for (let i = 0; i < x.length; i++){
//     console .log(x[i] + 10);
// }



// let x = [10,20,30,40,50,"sahil"];
// for(let i= 0; i<x.length; i++){
//     console.log(x[i]);
// }
 

//let x = ["Mumbai", "Banglore"," Hydrabad","Chennai","Delhi","Chandigarh"];
//  for(i =0; i<x.length; i++){
//     console.log(x[i]);
//  }

//let x = ["Mumbai", "Banglore"," Hydrabad","Chennai","Delhi","Chandigarh"]
// for(let y of x){
//     console.log(y.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks ){
//     sum = sum + val;
    

// }
// let avg = sum / marks.length;
// console.log("avg makrs", avg);

// let marks = [85,97,44,37,76,60];
// let sum = 0; 
// for(let i = 0;i<marks.length;i++){
//     sum  = sum + marks[i];
    
// }
// let avg = sum / marks.length;
// console.log(avg);


// let prices =[250,645,300,900,50];
//  for(let i = 0; i < prices.length; i++){
//     let offer  = prices[i] /10;
//     prices[i]= prices [i] - offer;
//  }
//  console.log(prices);

/// tpo find the smallest number  fro,m the  given array 
// let numbers = [45,88,12,99,23];
//  let max = [0];
//  let secondMax = [0];
//  for(let i = 1;i < numbers.length;i++){
//      if (numbers[i] > max){
//         secondMax = max;
//          max = numbers[i];
//      }
//       else if (numbers[i] > secondMax && numbers[i] !== max) {
//         secondMax = numbers[i];
//  }
// }
//  console.log(secondMax);


// let nums = [12,7,5,8,10,3,16];
// let evencount = 0;
// let oddcount = 0;
// for(let i=0; i<nums.length;i++){
//     if(nums[i]%2===0) {
//         evencount++;
//     } else{
//         oddcount++;
//     }
    
// }
// console.log("evencount", evencount);
// console.log("Oddcount", oddcount);

//  let x = Number(prompt(""));
//  let y = Number(prompt(""));
//  let z = x + y;
//  alert(z);

// alert is used to show the message on popup box 


// const arrowadd  = (a, b) => {
//     return a * b;
// };
// console.log(arrowadd);

// function countVowels(str){
//     let count = 0;
// for (let char of str){
//     console.log(char);
//     if(char ==="a" || char === "e" || char ==="i" || char ==="o" || char === "u"){
//         count++;
//     }
// }
// console.log(count);
// }
  
// let sahil = () => {
//     console.log("Hello Ram  This Side  ");
//     return 0;
// }
// let a = 5;
// let b = 10;
// let equal;
// if(a  === b){
//     sahil();
// }else{
//     equal = ("sahil");
// }
// console.log(equal);
 
// let add = (a,b) => {
//     console.log(a+b);
//     return 0;
// }

// add(10,20);



// const obj = {
//   name: "Ram",
//   class: 10,
//   roll_no: 28,
//   show() {
//     console.log(this.name);
//   }
// };
// obj.show();

// function foodReady() {
//   console.log("Food is ready 🍽️");
// }

// function orderFood(callback) {
//   console.log("Food is being prepared...");
  
//   setTimeout(function () {
//     callback(); // foodReady called
//   }, 10000);
// }

// orderFood(foodReady);

// let arr = [200,300,400,500,600];
// arr.forEach((num, index) => {
//     let offer  = num / 10;
//     arr[index]   = num - offer;
    
// }); 
// console.log(arr);

// let arr = [4, 5, 6, 7, 10, 15, 20];

// let newarr =  arr.filter( (val) =>{
//        return val  % 2 === 0;
    
// });
// console.log(newarr);

// let arr = [4, 5, 6, 7, 10, 15, 20];

// let newarr = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(newarr) ;

// let marks = [97, 64, 32, 49, 99, 96, 86];
//  let toper = marks.filter((val ) => {
//     return val > 90;

// })
// console.log(toper);

// let n = prompt(" Enter the number");

// let arr = [];
// for(let i = 1; i<=n; i++){
//     arr[i-1] = i; 
// }
// console.log(arr);

// let sum = arr.reduce((pre, curr) => {
//     return pre * curr;
// })
// console.log(sum);
// let heading = document.getElementsByTagName("Table");
// console.log(heading);

// let elements =document.querySelector("p")
// console.log(elements);

// let add = (a,b) => {
//     return a+b;
// }
// console.log(2,3);


// let arr = [23,45,44,12,50,30];
// let largest = 0;
//  arr.forEach((num) => {
//     if(num %2 === 0 && num > largest){
//     largest = num ;
//     }
// });
// console.log(largest);
// let elements =document.querySelector("div")
// console.log(elements);
 
// let elements = document.querySelector(".Fun")
// console.log(elements.innerText );

// let elements = document.querySelector("#append")
// elements.append("Sahil This Side")  ;
//  let x = (a,b) => {
//     return a+b;
//  }
//  console.log(x  (2,3));

// let x = document.querySelector("div");

// x.style.backgroundColor = "yellow";


// let x = document.createElement("button");
// x.innerText = "Click Me!";
// x.style.backgroundColor = "red";
// x.style.color = "black";
// console.log(x);

// let insert = document.querySelector("#insert");
// insert.append(x); 

// let para = document.querySelector(".learn");
// para.classList.add("newlearn");
// console.log(para);

// let arr= [10,20,45,30,40,50]
// let x = [];
// for(let i = 0; i<arr.length; i++){
//     if (arr[i] > 30 && arr[i] % 2 === 0){
//     x.push(arr[i]);
//     }
    
// }
// console.log(x);

// let x = document.querySelector("#event");

// x.onclick = () => {
//     console.log("sucessfully submited");
//     let a = 10;
//     a++;
//     console.log(a);
        
//     }; 

// x.addEventListener("click", () =>{
//     console.log("button was clicked");
// } );

// x.addEventListener("click", () =>{
//     console.log("button was clicked 2  ");
// } );


// Theme change code .
// let x = document.querySelector("#event");
// let mode = "light";
// x.addEventListener("click", () => {
//     if(mode ==="light"){
//         mode = "dark";
//         document.querySelector("body").style.backgroundColor = "red";
//     }else{
//         mode ="light";
//         document.querySelector("body").style.backgroundColor = "green";
//     }
//     console.log(mode);
// });


 
 let x = document.querySelector("#show");
  let yellowbtn = document.querySelector("#buttonyellow");
  let pinkbtn = document.querySelector("#buttonpink");

  yellowbtn.addEventListener("click" , () => {
     document.querySelector("#show").style.backgroundColor = "Yellow"
     console.log(yellowbtn);
  });
  pinkbtn.addEventListener("click" , () => {
     document.querySelector("#show").style.backgroundColor = "pink"
     console.log(pinkbtn);
  });