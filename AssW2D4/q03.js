Array.prototype.removeDuplicates = function () {
    return new Promise((resolve, reject)=>{
            resolve(this.filter((a, b) => this.indexOf(a) === b));
            reject(`Input is not array`);
    })
};
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates()
    .then(console.log)
    .catch(console.log)
console.log(`end`);
