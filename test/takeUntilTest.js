const _ = require('../index.js');


// Input:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');
// console.log(results2);

/* Expected Output:
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

// Tests:
_.assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
_.assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);