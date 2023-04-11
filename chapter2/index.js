//==ตัวอย่างของชะนิดข้อมูลใน JavaScript

console.log(typeof 23); 
console.log(typeof "34");
console.log(typeof 21.22);
console.log(typeof false);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(null === undefined);

//==========ค่าเริ่มต้นของ variable เป็น underfined เช่นกัน
var x;
console.log(x);

//==========ค่าเริ่มต้นของ Function ก็เป็น underfined เช่นกัน
function a (){}

console.log(a());

var y = null
console.log(y);

function b (){ return null}

console.log(b());

//============ชนิดของข้อมูล object
//array, objects, function, class instance

var foo = Boolean(false)
var foo = String('Hello')
console.log(typeof Boolean);
console.log(typeof String);

