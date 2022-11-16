function findDigits(n) {
    let divisorsCount = 0;
    const digits = n.toString().split("");
    
    digits.map((d) => {
        if (n % d == 0) {
            divisorsCount++;
        }
    });
    
    return divisorsCount;
}