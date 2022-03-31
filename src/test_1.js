// function sum(a) {
//     return (b)=>{
//         if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)())

// function sum_1(a) {
//     return (b)=>{
//         return (c)=>{
//             return a+b+c;
//         }
//     }
// }
// console.log(sum_1(1)(2)(3));


// function add(...arr) {
//     let n = arr.length;
//     return n * (n+1) /2;
// }
// console.log(add(1,2,3,4,5));




// function NumberOfSubSTr(str) {
//     let n = str.length;
//     return n * (n+1) /2;
// }
// console.log(NumberOfSubSTr("abede"))

// function NumberOfSubSTr_1(str,i,j,n) {
//     if(n===1) return 1;
//     if(n<=0) return 0;
//     let res = NumberOfSubSTr_1(str,i+1,j,n-1)+
//               NumberOfSubSTr_1(str,i,j-1,n-1)-
//               NumberOfSubSTr_1(str,i+1,j-1,n-2);

// if(res[i]===res[j]){
//     res++;
// }
// return res
// }
// let str = "abede"
// console.log(NumberOfSubSTr_1(str,0,str.length-1,str.length))


// function twoSame(str1,str2) {
//     for(let i=0;i<str1.length;i++){
//         let currentValue = str2.indexOf(str1[i]**2);
//         if(currentValue===-1){
//             return false;
//         }
//         str2.splice(currentValue,1);
//     }
//     return true
// }
// console.log(twoSame([1,2,3],[4,9,1]));

// function findDupAndRemoveDup(arr) {
//     let result = [];
//     let findup = [];
//     for(let i=0;i<arr.sort().length;i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }else{
//             findup.push(arr[i]);
//         }
//     }
//     return findup;
// }
// console.log(findDupAndRemoveDup([1,2,3,4,1,2]))

// function missingNumber(arr) {
//     let result = [];
//     let initial = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === initial) {
//             initial = arr[i] + 1;
//         } else {
//             result.push(initial);
//             initial = arr[i] + 1;
//         }
//     }
//     return result
// }
// console.log(missingNumber([1, 2, 4, 6, 8]))