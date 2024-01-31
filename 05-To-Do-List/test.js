function oddNumbers(l, r) {
    let arr = [];
    while (l <= r) {
        arr.push(l);
        l += 1;
    };
    console.log(arr);
    return arr.filter(n => n % 2);
}

console.log(oddNumbers(2,5));