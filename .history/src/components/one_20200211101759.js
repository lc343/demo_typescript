var he = "hello";
console.log(he);
var arr = [1, 2];
console.log(arr);
var ar = [1, 2];
console.log(ar);
var x;
x = ['tt', 1];
x = ['fff', 4];
console.log(x);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c);
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var temp = [1, 2, 3];
console.log(sayHello(temp));
//create boolean_object

