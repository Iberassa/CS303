function isPrime(num) {
    let result;
    let i;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false;
            break;
        }
    }
    if (i === num) {
        result = true;
    }
    return new Promise(function (resolve, reject) {
        if(result){
        setTimeout(() => {
            resolve({ prime: result })
        }, 5000);
    }else{
        setTimeout(() => {
            reject({ prime: result })
        }, 5000)
    }})
}
isPrime(7)
    .then(console.log)
    .catch(console.log)