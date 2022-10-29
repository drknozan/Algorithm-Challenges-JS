function countingValleys(steps, path) {
    let stepsArr = [0];
    let altitude = 0;
    let valleyCount = 0;
    
    for (let i=0; i<path.length; i++) {
        if (path[i] == "D") {
            altitude--;
            stepsArr.push(altitude);
        }
        if (path[i] == "U") {
            altitude++;
            stepsArr.push(altitude);
        }
    }
    
    stepsArr.forEach((s, i) => {
        if ((s < 0) && (stepsArr[i-1] == 0)) {
            valleyCount++;
        }
    });
    
    return valleyCount;
}