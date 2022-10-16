function catAndMouse(x, y, z) {
    const catADistance = Math.abs(x-z);
    const catBDistance = Math.abs(y-z);
    
    if (catADistance > catBDistance) {
        return "Cat B";
    } else if (catBDistance > catADistance) {
        return "Cat A";
    } else {
        return "Mouse C";
    }
}