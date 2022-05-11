/*

split array per chunkSize

https://stackoverflow.com/questions/8495687/split-array-into-chunks 

*/
const chunkSize = 10;
for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    // do whatever
}

// split markers per 10
// markers.length = 100
var rows =[];
for (let i = 0; i < markers.length; i += 10) {
    var chunk = markers.slice(i, i + 10);
	rows.push(chunk);	
}

// per row = 10 markers, rows.length = 10