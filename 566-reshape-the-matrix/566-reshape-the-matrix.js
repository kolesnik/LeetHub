/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let result = [];
    let newRow = [];
    let newRowIndex = 0;
    if(r*c !== mat[0].length*mat.length) {
        return mat;
    } 
    
    for(let i = 0; i <  mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            
            if(newRowIndex < c) {
                newRow.push(mat[i][j]);
                newRowIndex++;    
            }
            
            if (newRowIndex === c ) {
                result.push(newRow);
                newRow = [];
                newRowIndex = 0;
            }   
        }
        
    }
    //result.push(newRow);
    
    return result
    
};