let names = Array()

console.log(names)

const names2 = ['sena', 20, 2002, 'yazıcıoğlu']
names2[0]='betül'

console.log(names2)

//console.log('sena'.length)

console.log('sena'.split(''))

let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let result = array1.concat(array2,array3,10,11,12)
console.log(result) // [1,2,3,4,5,6,7,8,9,10,11,12]

const isim = ['sena' , 'betul' , 'sıla' , 'feyza']
isim.pop() //sondan siler
isim.shift() //bastan siler

isim.unshift('ilk eleman') //basa ekler
isim.push('son eleman') //sona ekler

console.log(isim)

const numbers = [4,1,5,9,[3,6,7],2]
console.log(numbers)

/* numbers.sort() //artan sekilde sıralar
console.log(numbers) 
 */
console.log(numbers[4][2]) //7
