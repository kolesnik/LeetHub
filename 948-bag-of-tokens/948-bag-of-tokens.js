/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
        let score = 0;
    let maxScore = 0;
    let ascTokens = tokens.sort((a,b) => a - b);
    let start = 0;
    let last = ascTokens.length -1;
 
    while(start <= last){
        if(ascTokens[start] <= power && score >= 0){
            score = score + 1;
            power = power - ascTokens[start];
            maxScore = Math.max(score, maxScore)
            start++
        }else if(ascTokens[start] > power && score >= 0){ 
            power = ascTokens[last] + power;
            score = score - 1;
            last--;
        }else{
            break;
        }
    }
    return maxScore;
};