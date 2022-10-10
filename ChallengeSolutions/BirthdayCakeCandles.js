function birthdayCakeCandles(candles) {
    const mv = Math.max(...candles);
    
    return candles.filter(function(item) {return item==mv}).length;
}