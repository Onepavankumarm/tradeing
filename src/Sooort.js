// function bubbleSort(arr) {
//     for(let i=arr.length;i>0;i--){
//         for(let j=0;j<i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([3,1,45,21,0,34]))

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let smallest = i;
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[j]<arr[smallest]){
//                 smallest=j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[smallest];
//         arr[smallest] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort([3, 1, 45, 21, 0, 34]))

// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp;
//             } else {
//                 break;
//             }
//         }
//     }
//     return arr
// }
// console.log(insertionSort([3, 1, 45, 21, 0, 34]))

// function mergeSort(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     console.log(arr2.length)
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }
//     return result
// }
// console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));

// function quickSort(arr) {
//     if(arr.length===0) return [];
//     let pivoteValue = arr[0];
//     let lesser = [];
//     let center = [];
//     let greater = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivoteValue) {
//             lesser.push(arr[i]);
//         } else if (arr[i] > pivoteValue) {
//             greater.push(arr[i])
//         } else {
//             center.push(arr[i])
//         }
//     }
//     return [...quickSort(lesser), ...center, ...quickSort(greater)]
// }
// let array = [1, 4, 2, 8, 345, 123, 143, 32, 567, 63, 123, 43, 2, 55, 1, 236, 92]
// console.log(quickSort(array))

// function findNumberOfWords(longest, shortest) {
//     let count = 0;
//     for (let i = 0; i < longest.length; i++) {
//         for (let j = 0; j < shortest.length; j++) {
//             if (shortest[j] !== longest[i + j]) break;
//             if (j === shortest.length - 1) count++
//         }
//     }
//     return count
// }
// console.log(findNumberOfWords("hellopavanhellopavan", "pavan"));


// function Amamazon() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }

// console.log(Amamazon())

// function Amazon_1(obj, key) {
//     for (let n in obj) {
//         if (n === key) {
//             delete obj[key]
//         }
//     }
//     return obj;
// }
// let obj = { name: 'pavan', aim: 'don' }
// console.log(Amazon_1(obj, 'name'))

// function longestString(str) {
//     let sen = str.match(/[a-z]+/gi);
//     return sen.sort((a,b)=>b.length-a.length)[0];
// }
// console.log(longestString("helo mag hooooooo are you"))

// function longestSubstringlength(str) {
//     let letter = str.split('');
//     let result = new Map();
//     let max = 0;
//     for (let i = 0; i < letter.length; i++) {
//         if (!result.has(letter[i])) {
//             result.set(letter[i], i);
//         }else{
//             i = result.get(letter[i]);
//             result.clear();
//         }
//         if(max<result.size){
//             max = result.size;
//         }
//     }
//     return  max;
// }
// console.log(longestSubstringlength("rithmschools"))