//==============การสร้างตัวแปลใน JavaScript 

// x = 'saiyfonh'
// var x = 'saiyfonh'
// let x = 'saiyfonh'
// const x = 'saiyfonh'

// console.log(x);

//=========== ตัวแปลแบบ Var สร้างขึ้นมาแล้วสามารถกำหนดค่าใหม่เข้าไปได้เลื้อยๆ

// var x;
// x = 'something';
// x = 'something else'

//=========== อีกเรื่องของ Var คือมันไม่สนใจ Scope มันถูกมองว่าเป็น global

// var a = 20;
// {
//     var a = 30
// }
// console.log(a);

// var g = 'global'
// function app (){
//     console.log(g);
// }

// app()

//=========== กานใช้งานตัวแปล Let 

if(true){
    let x = 23;
}

console.log(x);

// =========== การใช้งานตัวแปล Const
if (true){
    const x = 23;
    //x =
}

console.log(x);
