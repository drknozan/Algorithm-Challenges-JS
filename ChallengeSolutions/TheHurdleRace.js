function hurdleRace(k, height) {
    let potionDose = 0;
    
    for (let h of height) {
        if (h > k) {
            let difference = h-k;
            potionDose += difference;
            k += difference;
        }
    }
    
    return potionDose;
}