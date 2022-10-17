function angryProfessor(k, a) {
    let classCount = 0;
    
    for (const t of a) {
        if (t <= 0) {
            classCount++;
        }
    }
    
    if (classCount >= k) {
        return "NO";
    } else {
        return "YES";
    }
}