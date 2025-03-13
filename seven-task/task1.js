let handleNum = (num, evenCallback, oddCallback) => {
    if (num % 2 === 0) {
        evenCallback(num);
    } else {
        oddCallback(num);
    }
}

let handleEven = (num)=>{
    console.log(`${num} number is even`);
}
let handleOdd = (num)=>{
    console.log(`${num} number is odd`);
}

handleNum(4, handleEven, handleOdd);
