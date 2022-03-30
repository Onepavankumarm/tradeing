// function palandrom(str) {
//     // let reversed = "";
//     // for(let char of str){
//     //     reversed= char + reversed;
//     // }
//     let reversed = str.split('').reverse().join('');
//     if (reversed === str) {
//         return `palandrom`
//     } else {
//         return `not a palandrom`
//     }
// }
// console.log(palandrom("pnp"));


// function MinandMax(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let num of array) {
//         if (num > max) {
//             max = num;
//         } else if (num < min) {
//             min = num;
//         }
//     }
//     return `${min}:${max}`
// }
// console.log(MinandMax([1, 2, 34, 5, 6, 7, 8]))


// function isBalanced(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "(") {
//             stack.push(str[i])
//         } else {
//             let lastremove = stack.pop();
//             if (lastremove !== "(") {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0 ? true : false;
// }
// console.log(isBalanced(""));
// console.log(isBalanced("("));


// function removeDuplication(str) {
//     let lookUp = {};
//     for(let char of str){
//         if(lookUp[char]){
//             lookUp[char]++;
//         }else{
//             lookUp[char]=1;
//         }
//     }
//     return Object.keys(lookUp).join('');
// }
// console.log(removeDuplication("eded"))


// function countVowels(str) {
//     let result = str.match(/[aeiou]/gi);
//     return result.length;
// }
// console.log(countVowels("pavankumarm"))


// function countVowels_1(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].match(/[aeiou]/gi)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels_1("pavankumarm"));


// function countVowels_2(str) {
//     let count = 0;
//     let array = ['a','e','i','o','u'];
//     for(let i=0;i<str.length;i++){
//         if(array.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels_2("pavankumarm"));


// function reverseNumber(num) {
//     let result = num.toString().split('').reverse().join('');
//     return parseInt(result)*Math.sign(num);
// }
// console.log(reverseNumber(-54321))


// function CaptilizeFirstLetterWord(str) {
//     let result = [];
//     for(let char of str.split(' ')){
//         result.push(char[0].toUpperCase()+char.slice(1));
//     }
//     return result.join(' ');
// }
// console.log(CaptilizeFirstLetterWord("hello mag how are you"));

// function FrequencyCount(str) {
//     let lookUp = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z]/gi.test(char)) {
//             if (lookUp[char] > 0) {
//                 lookUp[char]++;
//             } else {
//                 lookUp[char] = 1;
//             }
//         }
//     }
//     // let char = '';
//     // let num = 0;
//     // for(let c in lookUp){
//     //     if(lookUp[c]>num){
//     //         num = lookUp[c];
//     //         char  = c;
//     //     }
//     // }
//     // return `${char}:${num}`

//     for(let c in lookUp){
//         if(lookUp[c]>1){
//             return false
//         }
//     }
//     return true;
// }

// console.log(FrequencyCount("pavankumar M"))

// function fizzbuzz() {
//     for (let i = 0; i < 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// console.log(fizzbuzz())

// function Anagram(str1, str2) {
//     let lookUp = {};
//     for (let char of str1) {
//         if (lookUp[char]) {
//             lookUp[char]++;
//         } else {
//             lookUp[char] = 1;
//         }
//     }
//     for (let char of str2) {
//         if (lookUp[char]) {
//             lookUp[char]--
//         } else {
//             return false
//         }
//     }
//     return true
// }
// console.log(Anagram("", ""));
// console.log(Anagram("cat", "tau"));