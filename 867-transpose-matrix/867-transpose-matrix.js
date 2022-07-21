/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let res = new Array(cols).fill().map(()=>Array(rows).fill());
    
    for(let i = 0; i < matrix.length; ++i){
        for(let j = 0; j < matrix[0].length; ++j){
            res[j][i] = matrix[i][j];
        }
    }
    return res;
};