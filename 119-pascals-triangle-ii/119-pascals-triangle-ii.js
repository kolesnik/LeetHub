/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [[1]];
    
    for(let i = 1; i <= rowIndex; i++) {
        let newRow = [1];
        const prevRow = result[i - 1];
    
        
        for(let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        newRow.push(1);
        result.push(newRow);
    }
    
    return result[result.length - 1] ;
};