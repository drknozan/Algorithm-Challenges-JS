function diagonalDifference(arr) {
    let lr = 0;
    let rl = 0;

    for(let i=0; i<arr.length; i++) {
        lr += arr[i][i]
        rl += arr[i][arr.length-1-i];
    }
    
    return Math.abs(lr-rl);
}