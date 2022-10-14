function breakingRecords(scores) {
    let leastRecordCount = 0;
    let mostRecordCount = 0;
    let leastRecord = 100000000;
    let mostRecord = 0;
    for (let i=0; i<scores.length; i++) {
        if (scores[i] > mostRecord) {
            mostRecord = scores[i];
            if (i != 0) {
                mostRecordCount += 1;
            }
        }
        if (scores[i] < leastRecord) {
            leastRecord = scores[i];
            if (i != 0) {
                leastRecordCount += 1;
            }
        }
    }
    return [mostRecordCount, leastRecordCount];
}