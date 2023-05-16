/* for(let i=1 ; i<= 5 ; i++){
    console.log('i =' ,i)
} */

for(let i = 1 ; i<=5 ; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}


const names = ['sena','mehmet','gokhan','ahmet','oguzhan']

for(let i = 0; i <= names.length ; i++){
    console.log(names[i])
}

const numbers = [50,60,27]
let sum=0

for(let i=0; i<numbers.length ; i++){
    sum = sum+numbers[i]
}

console.log(sum)

const countries = ['turkey','iceland','finland','germany']
let newArr = []

for(let i=0; i<countries.length ; i++){
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr)

let i = 0
while(i < names.length) {
    console.log('isim',names[i])
    i++
}

do{
    console.log('isim',names[i])
    i++
}while(i<names.length)