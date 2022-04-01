// let name = {
//     fname: 'pavan',
//     lname: 'kumar'
// }
// let getName = function () {
//     console.log(this.fname + ' ' + this.lname);
// }

// Function.prototype.pavanBind = function (...args) {
//     let obj = this,
//         parm = args.slice(1);
//     return (...args2) => {
//         obj.apply(args[0], [...parm, ...args2]);
//     }
// }
// let getFullName = getName.bind(name);
// console.log(getFullName());

// let name = {
//     fname:'pavan',
//     lname:'kumar',
// }
// let getName = function(){
//     console.log(this.fname+' '+this.lname);
// }
// Function.prototype.pavanCall = function(obj,...args) {
//     obj.refernce = this;
//     obj.refernce(...args);
// }
// console.log(getName.pavanCall(name))

// let name = {
//     fname:'pavan',
//     lname:'kumar',
// }
// let getName = function(){
//     console.log(this.fname+' '+this.lname);
// }
// Function.prototype.pavanApply = function(obj,...args) {
//     obj.refernce = this;
//     obj.refernce(...args);
// }
// console.log(getName.pavanApply(name))