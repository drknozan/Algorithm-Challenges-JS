function marsExploration(s) {
    let changed = 0;
    
    for (let i=0; i<s.length; i++) {
        if ((i % 3 == 0 || i % 3 == 2) && s.charAt(i) != "S") {
            changed++;
        }
        if (i % 3 == 1 && s.charAt(i) != "O") {
            changed++;
        }
    }
    
    return changed;
}