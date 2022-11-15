function marcsCakewalk(calorie) {
    let totalCalories = 0;
    calorie = calorie.sort((a, b) => b-a);
    
    calorie.map((e, i) => {
        totalCalories += (Math.pow(2, i))*e;
    });
    
    return totalCalories;
}