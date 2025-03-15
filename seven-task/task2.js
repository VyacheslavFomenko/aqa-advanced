let prNum = (num) => {
    console.log(num);

    if (num === 0) {
        return;
    }
    prNum(num-1);
}

prNum(5)