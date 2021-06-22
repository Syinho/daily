let p = new Promise((resolve, reject) => {
    setTimeout(reject, 5000);
});

setTimeout(console.log, 2000, p);
setTimeout(console.log, 000, p);