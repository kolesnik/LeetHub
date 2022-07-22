/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if(moves.length === 0) return true;
    let ud = 0, lr = 0;
    for(let char of moves){
        if(char === 'U') ud++;
        if(char === 'D') ud--;
        if(char === 'L') lr++;
        if(char === 'R') lr--;     
    }
    return ud === 0 && lr === 0;
};