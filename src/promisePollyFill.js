function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time);
    });
}
function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((res) => {
                result.push(res);
                if (index === promises.length - 1) {
                    resolve(result);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    })
}
myPromiseAll([showText("pavan", 1000), Promise.resolve("hello"), Promise.resolve("hellooo")]).then((value) => {
    console.log(value);
})