const _ = require('../index.js');

// assertArraysEqual(middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11, 12]), [7, 8]); // should FAIL!
// Tests:
_.assertArraysEqual(_.middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]); // should return ["3", "4"]
_.assertArraysEqual(_.middle(["1", "2"]), []); // should return [];
_.assertArraysEqual(_.middle(["1"]), []); // should return [];
_.assertArraysEqual(_.middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11, 12]), [6, 7]); // should return [6, 7]
_.assertArraysEqual(_.middle(["1", "2", "3"]), "2"); // should return "2"
_.assertArraysEqual(_.middle(["1", "2", "3", "4", "5", 6, 7, 8, 9, 10, 11]), 6); // should return 6
