let obj_1 = {
  name: "pavan",
  aim: "dom",
};
let obj_2 = {
  name: "pavan",
  aim: "dom",
};
function sameCheck(obj1, obj2) {
  let ob1 = JSON.stringify(obj1);
  let ob2 = JSON.stringify(obj2);
  return ob1 === ob2;
}
console.log(sameCheck(obj_1, obj_2));
