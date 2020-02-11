const he: string = "hello";
console.log(he);
let arr: number[] = [1,2];
console.log(arr);
let ar: Array<number> = [1,2];
console.log(ar);
let x:[string,number];
x = ['tt',1];
x = ['fff',4];
console.log(x);
enum Color{red,green,yellow};
let c: Color = Color.red;
console.log(c); 
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user :string = 'Tom';
console.log(sayHello(user));

// let temp :number[] = [1,2,3];
// console.log(sayHello(temp));
//create boolean_object
// let b :boolean = new Boolean(1); //boolean是基本类型，
let b :Boolean = new Boolean(1);
console.log(b);


