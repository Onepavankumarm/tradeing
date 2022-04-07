// // Anangram
// function Ananagram(str1,str2) {
//     let lookUp = {};
//     for(let char of str1){
//         if(lookUp[char]){
//             lookUp[char]++;
//         }else{
//             lookUp[char]=1;
//         }
//     }
//     for(let char of str2){
//         if(lookUp[char]){
//             lookUp[char]--;
//         }else{
//             return false
//         }
//     }
//     return true;
// }
// console.log(Ananagram("",""));

// console.log(Ananagram("cat","tad"));

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }
// class SinglelinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//     }
//     push(value) {
//         let newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     travercy() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }
//     pop() {
//         if (this.length === 0) return undefined;
//         let current = this.head;
//         let newtail = current;
//         while (current.next) {
//             newtail = current;
//             current = current.next;
//         }
//         this.tail = newtail;
//         this.tail.next = null;
//         this.length--;
//     }
// }
// const tree = new SinglelinkedList();
// tree.push("hello");
// tree.push("hello how");
// tree.push("hello how are");
// tree.pop();
// console.log(tree)
// console.log(tree.travercy())

// var name = "pavan";
// (function(){
//     console.log(this.name);
// })()

// const obj = {
//     name:'pavankumar',
//     a:function(){
//         console.log(this.name);
//     },
//     b:()=>{
//         console.log(this.name);
//     }
// }
// obj.a();
// obj.b();

// function Person(name) {
//     this.name = name;
//     this.getName = () =>{this.name};
// }
// let p = new Person("kumar");
// console.log(p.getName())

// output undefined 

// let object = {
//     message:'Hello word',
//     logMessage(){
//         console.log(this.message)
//     }
// }
// setTimeout(object.logMessage,1000);


// let obj = {
//     message:'hello message'
// }

// function logmessage() {
//     console.log(this.message);
// }

// console.log(logmessage.call(obj));


// function sum(x) {
//     return (y)=>{
//         return x+y
//     }
// }
// console.log(sum(2)(3))

// function sum(a) {
//     return (b)=>{
//         if(b){
//             return sum(a+b);
//         }
//         return a;
//     }
// }
// console.log(sum(1)(2)(3)())

// function debouncing(cb, d) {
//     let timer;
//     return (...args) => {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// }

// function doSomething() {
//     console.log('hello how message');
// }

// debouncing(doSomething, 1000)();

// function maxSub(arr) {
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         let cur = i;
//         for(let j=i+1;j<arr.length;j++){
//              cur = cur + arr[j];
//             max = Math.max(max,cur);
//         }
//     }
//     return max;
// }
// console.log(maxSub([1,2,-1,3,-2]))

// function invert(array) {
//     return array.map((item) => {
//         return { [item]: item }
//     })
// }
// console.log(invert([1, 2]))

// let obj = {name:'pavan',aim:'don'};
// let newObj = Object.fromEntries(Object.entries(obj).map(([k,v])=>[v,k]));
// console.log(newObj)

// function invert(obj) {
//     let result ={};
//     for(let key in obj){
//         result[obj[key]]=key;
//     }
//    return result; 
// }
// let obj = {name:'pavan',aim:'don'};
// console.log(invert(obj))

// function Amaazon() {
//     for(let i=0;i<5;i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }
// console.log(Amaazon())


function foo() {
    function aem(){return 7;} 
    return aem();
    function aem(){return 3;} 
    function aem(){return 4;} 
}
console.log(foo())