/*
function sayHello(){
    console.log('Hello!')
}
sayHello()
*/
function multiply(num1, num2){
    return num1*num2
}

let total = multiply(5,2)
console.log('Çarpım' , total )

function sumArrayValues(array){
    let total = 0
    for(let i=0; i<array.length; i++){
        total += array[i]
    }
    return total
}
let dizi = [2,4,6,8,10,20]
console.log('Toplam', sumArrayValues(dizi))


function topla() {
    let total=0
    for(let i = 0; i<arguments.length ; i++){
        total += arguments[i]
    }
    return total
}
console.log(topla(2,5,7,9,10))

const sayHello = function(name){
    return `Hello ${name}!`
};
console.log(sayHello('Sena'));


//self invoking functions
(function(){
    console.log('he yo!')
})()

let sayHello2 = (function(name){
    console.log(`Hello ${name}`)
})('Sena')


//normal fonksiyon(regular function)
function hello(name){
 return `Hello ${name}`
}

//ok fonksiyonu(arrow function)
const hello2 = (name) => `Hello ${name}`
console.log(hello2('Senaaaa'))


//function with default parameters
function multiply2(num1, num2=2){
    return num1*num2
}
console.log(multiply2(10))
console.log(multiply2(15,5))

//call vs. invoke
function test(){
    console.log('test fonksiyonu calisti!')
}

//call
test()

function invoker(func){
    func()
}

//invoke
invoker(test)


