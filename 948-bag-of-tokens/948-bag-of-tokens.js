/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
        let score = 0;
    let maxScore = 0;
    tokens.sort((a,b) => a - b);
    let start = 0;
    let last = tokens.length -1;
 
    while(start <= last){
        if(tokens[start] <= power && score >= 0){
            score++;
            power = power - tokens[start];
            maxScore = Math.max(score, maxScore)
            start++
        }else if(tokens[start] > power && score >= 0){ 
            power += tokens[last];
            score--;
            last--;
        }else{
            break;
        }
    }
    return maxScore;
};