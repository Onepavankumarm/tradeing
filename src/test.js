function debouncing(cb,d) {
    let timer;
    return ()=>{
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb()
        }, d);
    }
}
function comeonKalavathi() {
    console.log("Hello kalvathi come on come on kalavathi");
}

debouncing(comeonKalavathi,1000)();