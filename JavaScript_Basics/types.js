// var a = 12;
// var b = a;

// b = b + 2;

var a = [12, 13];
var b = a;  // [12, 13] shared by both a and b (not copied from a to b)

b.pop();    //removes last element, so 13
// now, a and b both have the value 12 only