// let array = [1,2,3,4,5,6];
// Array.prototype.pavanFiletr = function(cb){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }
// let newArray = array.pavanFiletr((item)=>item>2);
// console.log(array);
// console.log(newArray);

// let array = [1, 2, 3, 4, 5];
// Array.prototype.pavanForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             cb(this[i], i, this);
//         }

//     }
// }
// let newArray = array.pavanForEach((item, i) => {
//     array[i] = item + 1;
// });
// console.log(array)
// console.log(newArray)

// let array = [1,2,3,4,5,6];
// Array.prototype.pavanMap = function(cb){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             result.push(this[i]);
//         }
//     }
//     return result; 
// }
// let newArray = array.map((item)=>item+1);
// console.log(array);
// console.log(newArray);

// let array = [1, 2, 3, 4, 5];
// Array.prototype.pavanFind = function(cb){
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)){
//             return this[i]
//         }
//     }
// }
// let newArray = array.pavanFind((item) => item === 3);
// console.log(array)
// console.log(newArray)

// let array = [1, 2, 3, 4, 5];
// Array.prototype.pavanReduce = function (cb, initialValue) {
//     let accumulater = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accumulater = cb(accumulater, this[i], i, this);
//     }
//     return accumulater
// }
// let newArray = array.pavanReduce((t, c) => t + c, 0);
// console.log(array);
// console.log(newArray);
