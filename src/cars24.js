// function abc() {
//     console.log(a)
//     var a = 10;
// }
// abc();

// function abc() {
//     console.log(a,b,c);
//     let b = 10;
//     const c = 10;
//     var a = 10;
// }
// console.log(abc())

// var obj = {
//     name:'piyoush',
//     display:()=>{
//         console.log(this.name);
//     }
// }
// let obj2 = {
//     name:'xyz',
// }
// obj.display.call(obj2);

// function Memorization(fn, context) {
//     let res = {};
//     return (...args) => {
//         let argscache = JSON.stringify(args);
//         if (!res[argscache]) {
//             res[argscache] = fn.call(context || this, ...args);
//         }
//         return res[argscache]
//     }
// }
// function calculate(num1, num2) {
//     for (let i = 0; i < 1000000; i++) { };
//     return num1 * num2;
// }

// const calculatedMemeo = Memorization(calculate);

// console.time("t1");
// console.log(calculatedMemeo(9876, 9876));
// console.timeEnd("t1");

// console.time("t1");
// console.log(calculatedMemeo(9876, 9876));
// console.timeEnd("t1");

//

// console.log("a");
// setTimeout(() => {
//     console.log("set")
// }, 0);
// Promise.resolve(() => console.log("pro")).then((res) => res());
// console.log("b");

// function add(a) {
//     return (b) => {
//         if (b) {
//             return add(a + b);
//         }
//         return a;
//     }
// }
// console.log(add(5)(2)(4)(5)())

// const calculate = {
//     total:0,
//     add(a){
//         this.total +=a;
//         return this;
//     },
//     sub(a){
//         this.total -=a;
//         return this;
//     },
//     mul(a){
//         this.total *=a;
//         return this;
//     }
// }
// let evaluate = calculate.add(20).sub(50).mul(10);
// console.log(evaluate.total);