function viralAdvertising(n) {
    let cumulative = 2;
    let shared = 5;
    let liked = 2;
    for (let i=1; i<n; i++) {
        shared = liked * 3;
        liked = Math.floor(shared/2);
        cumulative += liked;
    }
    
    return cumulative;
}