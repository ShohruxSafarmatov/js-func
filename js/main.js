/////////////////////////////////////////////////////////////////////////////////////////

// let a = 15;
// for (let i = 0; i <= a; i++) {
//     if(a%i ==0){
//        console.log(i);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 15;
// let b = 0;
// for (let i = 0; i <= a; i++) {
//     if(a%i ==0){
//        console.log(b+=i);
//     }
// }
// console.log(b);

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 6;
// let b = 0;
// for (let i = 0; i < a; i++) {
//     if(a % i == 0){
//         console.log(b+=i);
//     }            
// }
// if(a == b){
//     console.log(`mukammal son`);
// }else{
//     console.log(`mukammal son emas`);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 6;
// let b = 0;
// for (let i = 0; i <a; i++) {
//     if(a % i == 0){
//         console.log(i);
//     }            
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 7;
// let b = 0;
// let c= 0;
// for (let i = 0; i <a; i++) {
//     if(a % 3 == 0){
//         console.log(b+=i);
//     }else if (a % 5 !=0){
//         console.log(c+=i);
//     }       
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 17;
// let b =0
// for(let i = 2; i<=a; i++){
//     if(a % i == 0){
//         b+=1
//     }
// }
// if(b == 1){
// console.log("Tub son");
// }
// else{
//     console.log("Tub son emas");
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 20;
// for (let i = 0; i <= a; i++) {
//     let c = 0;
//     for (let a = 2; a < i; a++) {
//         if (i % a == 0) {
//             c += 1;
//         }
//     }
//     if (i > 1 && c == 0) {
//         console.log(i);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 100;
// let c = 4
// let b = []
// for(let i =1; i<=a; i++){
//     console.log(i);
//     if(i % c == 0){
//         b.push(i)
//     }
// }
// console.log(b);

/////////////////////////////////////////////////////////////////////////////////////////

// let func = (num) => {
//     let sum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum
// }
// for (let num = 0; num < 1000; num++) {
//     let a = func(num);
//     if (a !== num && num < a) {
//         if (func(a) === num) {
//             console.log("Do'st sonlar: ", num, a);
//         }
//     }
// }                

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 4;
// let b= 4
// console.log(Math.pow(a,b));

/////////////////////////////////////////////////////////////////////////////////////////

// function factorial(n){
//     a = 1;
//     for(i=1;i<=n;i++){
//       a = a*i;
//     }
//     return a;
//   }
//   console.log(factorial(10));

/////////////////////////////////////////////////////////////////////////////////////////

// function minmax(a, b, d, c) {
//     if (a == b && a == d &&  a == c) {
//         console.log("Teng");
//     } else if(a <= b && a <= d && a <= c) {
//         console.log(a);
//     } else if (b <= a && b <= d && b <= c) {
//         console.log(b);
//     } else if (d <= a && d <= b && d <= c) {
//         console.log(d);
//     } else if (c <= a && c <= b && c <= d) {
//         console.log(c);
//     } 
//     if(a >= b && a >= d && a >= c) {
//         console.log(a);
//     } else if (b >= a && b >= d && b >= c) {
//         console.log(b);
//     } else if (d >= a && d >= b && d >= c) {
//         console.log(d);
//     } else if (c >= a && c >= b && c >= d) {
//         console.log(c);
//     }
// }
// minmax(1,2,3,4)

/////////////////////////////////////////////////////////////////////////////////////////

// function sortInc(a, b, c) {
//     let sum = [a,b,c]
//     sum.sort((a,b)=>a-b)
//     return sum
// }

// console.log(sortInc(12,9,4));

/////////////////////////////////////////////////////////////////////////////////////////

// function sortInc(a, b, c) {
//     let sum = [a,b,c]
//     sum.sort((a,b)=>b-a)
//     return sum
// }

// console.log(sortInc(12,9,4));

/////////////////////////////////////////////////////////////////////////////////////////


// 16
// function realNum(a,b) {
//     let c = a + b
//     if (c > 0) {
//         console.log("1");
//     }else  if (c === 0) {
//         console.log("0");
//     }else  if (c < 0) {
//         console.log("-1");
//     }
//     return c;
// }
// console.log(realNum(3,-1));

/////////////////////////////////////////////////////////////////////////////////////////

// function arrayRotate(a, b) {
//     if (b) a.unshift(a.pop());
//     else a.push(a.shift());
//     return a;
// }
// console.log(arrayRotate([1, 2, 3, 4, 5])); 
// console.log(arrayRotate([1, 2, 3, 4, 5], true)); 

/////////////////////////////////////////////////////////////////////////////////////////

// let a = 1;
// let b = 2;
// let c = 1;
// let d = (b ** 2) - (4 * a * c)
// console.log(d);
// if (d<0){
//     console.log("0");
// }else if ( d>0){
//     console.log("2");
// }else if (d == 0){
//      console.log("1");
// }



