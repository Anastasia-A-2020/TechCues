// const arr1 = [1, 2, 3, 1, 2];
// const arr2 = [1, 2];

// function fn(arr) {
//   for (let i = arr.length-; i < arr.length; i += 1){
//     console.log(i);
//     if (arr2.includes(arr[i])) {
//       arr.splice(arr.indexOf(arr[i]), 1);
//     }
//   }
//   return arr1;
// }
//      #01
// function sumArray(array=[]) {
// const maxNum = Math.max(...array);
// const minNum = Math.min(...array);
// const idxMaxNum = array.indexOf(maxNum);
// const idxMinNum = array.indexOf(minNum);
// let resalt = 0;
  
//   for (let i = 0; i < array.length; i+=1){
//     if (array === null || array.length === 0) {
//       return `Array is not a arr`;
//       break;
//     }else if(i === idxMaxNum || i ===idxMinNum ){
//       continue;
//     }
//     resalt += array[i];
    
//   }
//   return resalt;
// }

// const num = sumArray(null);
// console.log(num);

//  #02

// function litres(time) {
//   if (!NaN) {
//     console.log(time);
//     const liters = Math.floor(time/2);
   
//   return liters;
//   }else{
//     return 1;
//   }
  
// }
// console.log(litres(6));

//  04

// function invert(array) {
//     Math.invert(1)
// }

// function invert(array) {
//   const arr = [];
//   for (let num of array) {
//     if (Number(num) === NaN) { return } else if (num > 0 || num < 0) {
//       arr.push(num = -num);
//     } else if (num === 0) {
//       arr.push(num = -num)
//     } else {
//       arr.push(-0)
//     }
//    }
//   return arr;
// }

// console.log(invert([1,2, -3, -0]));

//  05
// function countBy(x, n) {
//   let z = [];
//     for(let el = x;  el <= n; el +=1){
//       z.push(el)
//     }
//   return z;
// }

// console.log(countBy(2,5));

//  06

// function bmi(weight, height) {
//   const idx = weight / Math.pow(height, 2);
  
//   if (!Number(idx)) {
//     return
//   } else if (idx <= 18.5) {
//     return "Underweight";
//   } else if (idx <= 25.0) {
//     return "Normal";
//   } else if (idx <= 30.0) {
//     return "Overweight";
//   } else if (idx > 30) {
//     return "Obese";
//   }
// }

//  07

// function fakeBin(x){
//   return x.split("").map(x=>x<5?0:1).join("");
// }

// console.log(fakeBin("12345678"));

//  08

// function sumMix(x){
//   const total = x.reduce((previousValue, number) => {
//     if (Number(number) !== NaN) { return previousValue + Number(number) };
  
//   }, 0);
//   return total;
// }

// console.log(sumMix([9, 3, "3"]));

//  09

// function digitize(n) {
//   return String(n).split("").map(el =>  Number(el) );
// }

// console.log(digitize(123));

// const refs = {
// button: document.querySelector(".btn-sing-in"),
// }
// refs.button.innerHTML = "hello";
// console.log(refs.button.innerHTML);

// refs.button.addEventListener("click", callback);
// refs.button.addEventListener("click", callback2);

// function callback(e) {
//   console.log(e.type);
// }

// function callback2(e) {
//   console.log(e.currentTarget.innerHTML);
// }

// document.addEventListener("keydown", (letter)=>console.log("keydown: ", letter.key, "code: ", letter.code))

//  10

// function digitize (num) {
//   return String(num).split("").sort((a,b)=> a-b).map(el => Number(el));
// }

// console.log(digitize(135234));

//  11

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
 
//   do {
//     p0 = p0 + aug + p0 * (percent / 100);
//     years += 1
//   } while (p0 <= p)
//   return years;
// }

// console.log(nbYear(1500, 5, 100, 5000));

//  12

// function findNextSquare(sq) {
//   const num = Math.pow(sq, 0.5);
//  return  parseInt(num) === num ? Math.pow(num + 1, 2) : -1;
// }

// console.log(findNextSquare(25));

//  13
// function sum (numbers) {
//     return numbers.reduce((previousValue, number) => previousValue + Number.parseFloat(number) , 0);
// };

// const arr = [1, 5, 4, 0];

// console.log(sum(arr));

// 14

// function basicOp(operation, value1, value2)
// {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//      return  value1 / value2;
      
//   }
// }

// console.log(basicOp('+', 4, 7));

//  15

// function accum(s) {
//   const arr = s.split("");
//   const arr2 = [];

//   return arr.map((el, i) => {
//     let a = el.toUpperCase();
//     const b = i + 1;
//     while (a.length < b) {
//       a += el.toLowerCase();
//     }
    
//     return a;
//   }).join("-")
 
// }

// console.log(accum("ZtpglnRxqenU"));

//  16

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(3, "Love "));

//  17

// function betterThanAverage(classPoints, yourPoints) {
//   return classPoints.every(point => point < yourPoints);
// }

// console.log(betterThanAverage([ 40, 34, 57, 29, 72, 57, 8], 75));

// 18

// var number = function (busStops) {
//   return busStops.reduce((total, item) => {
//     total + item[0] - item[1];
//   }, 0)
// }

//  19

// const countSheep = function (num) {
//   let i = 0;
//   let str = [];
//   while (i < num) {
//     i += 1;
//     str.push(`${i} sheep...`)
//   }
//   return str.join("");
// }


// console.log(countSheep(3));
  




