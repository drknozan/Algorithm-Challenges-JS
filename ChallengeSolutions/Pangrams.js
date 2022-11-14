function pangrams(s) {
    let uniqueChars = new Set(s.toLowerCase());
    
    if (uniqueChars.size > 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}