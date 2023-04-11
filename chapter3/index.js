//=========== ใน JavaScript เรานิยมกันใช้ If......else statement กำหนดเงื่อนไขแบบพื้นฐานเช่น

var truthy = false; //true, null, false 

if (truthy) {
    //do this
    console.log("Hello");
} else if(truthy == null){
    //do this
    console.log("Good bye");
} else {
    //do this
    console.log("Bye Bye")
}

//=========ความเข้าใจเกี่ยวกับ True / False

// true

console.log(true);
console.log(!! {});
console.log(!! []);

// false

console.log(false);
console.log(! {});
console.log(!! '');
console.log(!! 0);

// Operator in JavaScript
var x = !!!!!!!!!!!!!!!true;
console.log(x);

// var a = true && false 
var a = true || false
console.log(a);

// var val = "23"=== 23
var val = "23" === 23;
console.log(val);

//======== Ternary Operator
var tnary = true;
// var x 

// if (tnary) {
//     x = 1;
// }else{
//     x = 2;
// }

console.log(x);
var x = tnary ? 1 : 2; // ternary operator
console.log(x);
