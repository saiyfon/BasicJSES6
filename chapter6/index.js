//========= พื้นฐานของ Object ==============
// Arry 
const arr = [1,2,3,4,5] //array
console.log(arr);

// KEY: VALUE
// Object 

const obj1 = new Object();
obj1.name = 'Aey'
obj1.color = 'Blue'

console.log(obj1);

const obj2 = {
    name:'Aey',
    color:'Blue',
    age: 23,
    status: false
}

console.log(obj2);

//การเปลี่ยนแปลงค่าภายใน Object เราเรียกว่าการ Mutate
obj2.name = 'Noy'
console.log(obj2);

//===== Object สามารถเก็บเป็น Value หรือเป็นฟังก์ชั่นก็ได้
const obj3 = {
    name: 'a',
    color: 'pink',
    age: 13,
    hello: function(){
        return this;
    }
}
console.log(obj3);
console.log(obj3.hello());

//========= มาดูการทำงานของ This
const obj4 = {
    name: 'b',
    color: 'pink',
    age: 17,
    hello1: function(){
        console.log(this);
    },
    hello2: () => {
        console.log(this); {}
    }
}

obj4.hello1();
obj4.hello2();