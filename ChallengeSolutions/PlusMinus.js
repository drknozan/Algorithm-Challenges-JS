function plusMinus(arr) {
    let pc = 0;
    let nc = 0;
    let zc = 0;
    for(let i=0; i<arr.length; i++) {
        if(Math.sign(arr[i]) == 1) {
            pc++;  
        } else if(Math.sign(arr[i]) == -1) {
            nc++;
        } else {
            zc++;
        }
    }
    console.log((pc/arr.length).toFixed(6) + "\n" + (nc/arr.length).toFixed(6) + "\n" + (zc/arr.length).toFixed(6));
}