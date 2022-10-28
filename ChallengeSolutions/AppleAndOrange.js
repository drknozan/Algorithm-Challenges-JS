function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    
    apples.forEach((m) => {
        if (((m+a) >= s) && ((m+a) <= t)) {
            appleCount++;
        }
    });
    
    oranges.forEach((n) => {
        if (((n+b) >= s) && ((n+b) <= t)) {
            orangeCount++;
        }
    });
    
    console.log(appleCount);
    console.log(orangeCount);
}