let name = {
    fname: 'pavan',
    lname: 'kumar'
}
let getName = function () {
    console.log(this.fname + ' ' + this.lname);
}
console.log(getName.call(name));

Function.prototype.MyCall = function(obj,...args){
    obj.reference= this;
    obj.reference(...args)
}
console.log(getName.MyCall(name));

Function.prototype.MyCall = function(obj,...args){
    obj.reference= this;
    obj.reference(...args)
}
console.log(getName.apply(name));


