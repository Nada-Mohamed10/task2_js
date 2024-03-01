//calculate the sum of numbers within array with 5 element
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// document.write(sum);




/**********************************************question two********************** */
// using built in functiion remove the space found in a string
// let  Name = '                   nada          '
// console.log(Name.length);
// let remove_space = Name.trim();
// console.log(remove_space);
// console.log(remove_space.length);





/*****************************question three******************************* */
// return a boolean if anumber  is divisible by 10
// let num = Number(prompt("enter your number"));
// if (num % 10 == 0) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


/**********************************qusetion four ***************************************** */
//using function to return the max between 2 numbers '
// let num1 = Number(prompt("enter your number1"));
// let num2 = Number(prompt("enter your number2"));
// function maximum(x, y) {
//     if (x > y) {
//         console.log(x);
//     }
//     else {
//         console.log(y);
//     }
// }
// maximum(num1, num2);


//************************part 2************************* */
// what is the datatype of "helllo world"
// let word = "hello world";
// document.write(typeof word);


// what is happen when is put + between string and number
// let Word = "nada";
// let num = 10;
// document.write(Word + num);


// what is the && operator represent in js
// represent  and connected two condition and is true




/******************************************part 3************************ */
// how i can acess all data in array without using index












// shift remove first element
// let arr = [1, 2, 3, 4]
// arr.shift();
// console.log(arr);

// add in last  by push  and add in start by unshift
// let arr = ["nada", "mosad"]
// arr.push("ahmed")
// arr.unshift("ahmed")
// console.log(arr)


// slice 
let arr = ["nada", "mosad", "ahmed", "gana", "adam"]
console.log(arr.slice(1, 3))
console.log(arr.splice(0, 0, "nadia"))
console.log(arr)



//spread
let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];
let numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)