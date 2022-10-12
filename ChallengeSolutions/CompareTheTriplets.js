function compareTriplets(a, b) {
    let aP = 0;
    let bP = 0;
    for(let i=0; i<3; i++) {
        if(a[i] > b[i]) {
            aP++;
        }
        if(a[i] < b[i]) {
            bP++;
        }
    }
    
    return [aP, bP];
}