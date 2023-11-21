var fuzzysort = require('./fuzzysort');
var data = require('./testdata_kor2');

const result = fuzzysort.go('젤다', data);

console.log(result);
fuzzysort.hightlight(result);