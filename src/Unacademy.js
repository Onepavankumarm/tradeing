
// let array = [1,2,3,4,5];
// let newArray = array.forEach((item,i) => {
//     array[i] = item + 1;
// });
// console.log(array);
// console.log(newArray);

// let array_1 = [1, 2, 3, 4, 5, 6];
// let newArray_1 = array_1.map((item) => item + 1);
// console.log(array_1);
// console.log(newArray_1);

// console.log(null==undefined);//true
// console.log(null===undefined);//false

// function flatterArray(arg) {
//     let result = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (Array.isArray(arg[i])) {
//             result.push(...flatterArray(arg[i]))
//         } else {
//             result.push(arg[i])
//         }
//     }
//     return result
// }

// console.log(flatterArray([1, 2, [3, 4, [6, 7, [8, 9]]]]));

// function Amamzon() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }
// console.log(Amamzon())

// let obj_1 = {
//     name: 'pavan',
//     aim: 'don'
// }
// let obj_2 = {
//     name: 'pavan shetty',
//     aim: 'enginerr'
// }
// function display() {
//     console.log(this.name+' '+this.aim);
// }
// console.log(display.call(obj_1))
// console.log(display.apply(obj_1))
// let newArray = display.bind(obj_1)
// console.log(newArray())


// function add(a){
//     return a+ 5;
// }
// function sub(a){
//     return a - 15;
// }
// function mul(a) {
//     return a * 20;
// }
// const compose = (...functions) =>{
//     return (args)=>{
//         return functions.reduceRight((arg,fn)=>fn(arg),args);
//     }
// }
// const evaluate = compose(add,sub,mul);
// console.log(evaluate(10))

// function showAll(text, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, time);
//     })
// }
// function pavanPromiseAll(promises) {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((p, index) => {
//             p.then((res) => {
//                 result.push(res);
//             })
//             if (index === promises.length - 1) {
//                 resolve(result)
//             }
//         }).catch((error) => {
//             reject(error);
//         })
//     })
// }
// pavanPromiseAll([showAll("pavan", 700), Promise.resolve("hello"), Promise.resolve("how")]).then((value) => {
//     console.log(value)
// });
