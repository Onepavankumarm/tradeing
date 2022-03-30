let array = [1, 2, 3, 4, 5, 6];
let newArray = array.filter((item) => item > 2);
console.log(newArray);

Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result
}
let newArray_1 = array.myFilter((item) => item > 2);
console.log(newArray_1);