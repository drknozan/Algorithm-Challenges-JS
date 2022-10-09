function miniMaxSum(arr) {
    let sum = arr.reduce(function(a,b) {return a+b}, 0);
    
    console.log((sum - Math.max(...arr)) + " " + (sum - Math.min(...arr)));
}