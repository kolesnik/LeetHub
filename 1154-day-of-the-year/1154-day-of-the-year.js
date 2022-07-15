/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    
    let days = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    const parts = date.split('-');
    const isLeap = year => new Date(year, 1, 29).getDate() === 29;
    
    let month = Number(parts[1]);
    let daysCnt = Number(parts[2]);
    
    
   
    if (isLeap(parts[0])) days[1] = 29;
    while (month > 1) {
        daysCnt+= days[month - 2];
        month--;
    }
        
    
    return daysCnt;
    
   

    
};