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
// let temp :number[] = [1,2,3];
// console.log(sayHello(temp));
//create boolean_object
// let b :boolean = new Boolean(1); //boolean是基本类型，new Boolean是对象
// let b :Boolean = new Boolean(1);
var b = Boolean(false);
console.log(b);
var decLiteral = 6;
var hexLiteral = 0xf00d; 
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
