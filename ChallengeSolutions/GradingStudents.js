function gradingStudents(grades) {
    for (let i=0; i<grades.length; i++) {
        if (grades[i] >= 38) {
            const difference = grades[i] % 5;
            if ((5 - difference) < 3) {
                grades[i] = grades[i] + (5 - difference)
            };
        };
    };
    
    return grades;
}