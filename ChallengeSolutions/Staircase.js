function staircase(n) {
    for(let i=1; i<n+1; i++) {
        let line = Array(n-i).fill(' ').join('');
        line += Array(i).fill('#').join('');
        console.log(line);
    }   
}