function divisibleSumPairs(n, k, ar) {
    let pairsCount = 0;
    
    for (let i=0; i<ar.length; i++) {
        for (let j=ar.length; i<j; j--) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairsCount++;
            }
        }
    }
    
    return pairsCount;
}