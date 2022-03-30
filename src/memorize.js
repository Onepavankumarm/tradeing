function Memorization(fn, context) {
    let res = {};
    return (...args) => {
        let argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache]
    }
}

function calculate(num1, num2) {
    for (let i = 0; i < 10000; i++) { };
    return num1 * num2;
}

let memo = Memorization(calculate);

console.time("t1")
console.log(memo(8765, 8765));
console.timeEnd("t1")

console.time("t1")
console.log(memo(8765, 8765));
console.timeEnd("t1")

//HOC
// const myHoc = (hoc) => hoc;
// const hello = () => console.log("hello how are you")
// let x = myHoc(hello)
// console.log(x());
