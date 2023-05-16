let numOne = 3
let numTwo = 3

console.log( numOne == numTwo) //true

let js = 'Javascript'
let py ='Python'

console.log(js==py) //false

let lightOn = true
let lightOff = false

console.log(lightOn==lightOff) //false

let nums = [1, 'yaraligoz', 3]
nums[0] = 10
console.log(nums)

let name = 'sena'
let surname = 'yazıcıoğlu'
let a = 7
let b = 9
//let space = ' '

//let fullName = name + space + surname
//console.log(fullName)

let fullName = `${name} 

test
deneme

a + b = ${a+b}
${a} + ${b} = ${a+b} 

${surname}`
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
