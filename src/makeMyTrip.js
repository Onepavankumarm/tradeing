// function moveZeroToEnd(arr) {
//     let count = 0;
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             result.push(arr[i])
//         } else {
//             count++
//         }
//     }
//     for (let i = 0; i < count; i++) {
//         result.push(0);
//     }
//     return result
// }
// console.log(moveZeroToEnd([8, 5, 0, 10, 0, 20]))

// function twoSum(arr, key) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === key) {
//                 return true
//             }
//         }
//     }
//     return false;
// }
// console.log(twoSum([2, 1, 3, 6], 3))

// let array = [1,2,3,4,5,6];
// Array.prototype.pavanFilter = function(cb){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }
// let newArray = array.filter((item)=>item>2);
// console.log(array);
// console.log(newArray);


//4.Render to String;
// ReactDomServer = renderToString // it is used to translate (html to string) to disply on client side.
// ReactDom.hyderate() it is used to attach the event handler to make page responsive.
