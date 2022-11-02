function beautifulDays(i, j, k) {
    let bCount = 0;
    
    for (let n=i; n<=j; n++) {
        const reversed = n.toString().split('').reverse().join('');
        const r = Math.abs(n-reversed) / k;
        if (r % 1 == 0) bCount++;
    }
    
    return bCount;
}