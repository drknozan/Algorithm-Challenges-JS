function camelcase(s) {
    let count = 1;
    for (var i=0; i<s.length; i++) {
        if (s.charAt(i) == s.charAt(i).toUpperCase()) {
            count++;
        }
    }
    
    return count;
}