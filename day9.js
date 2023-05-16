const callback = number => number ** 2 //arrow function kullanildi

function cube(callback, number){
    return callback(number) * number
}

//console.log(cube(callback,3))

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 * s2 + s3
        }
        return c
    }
    return b
}

//console.log( a(5)(10)(27))

const numbers = [1, 3, 5, 7, 9]

console.log(
    numbers.reduce((oldValue, currentValue) => oldValue+currentValue, 0) //buradaki 0 total=0'dır
)
/*let total = 0
let calculate = (number,index) => total += (number+index) //index -> dizideki elemanların yerlerinin degerleridir
numbers.forEach(calculate)
//numbers.forEach(number => total += number)
console.log(total) */

function sayHello(){
    //console.log('heeeeellooo')
}

//setInterval(sayHello,1000) //her (1000ms=1s) bir saniyede heeeeellooo yazar

/*function sayHello(){
   console.log('heeeeellooo')
}*/

//setTimeout(sayHello,5000) //5 saniye sonra heeeeellooo yazar

const interval = setInterval(sayHello,1000)
//clearInterval
//clearTimeout

/*const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('interval islemi iptal edildi!')
}, 7000)*/ //yedi saniye sonra interval islemi iptal edilir

/*setTimeout(() => {
    clearTimeout(timeout)
   // console.log('timeout islemi iptal edildi, interval islemi devam edecek...')
}, 3000) */

/*const users = [
    {
        id:1,
        name:'sena',
        age:20
    },
    {
        id:2,
        name:'feyza',
        age:16
    },
    {
        id:3,
        name:'sila',
        age:24
    }
]

users = users.map((user) => {
    if(user.id === 2){
        user.name = 'ahmet'
    }
    return user
})
console.log(users)*/


//MAP fonksiyonu ile dizideki elemanlari istedigimiz sekilde degistirme
const names = ['sena', 'sila', 'feyza', 'melike']
const namesToUpperCase = names.map((name) => name.toUpperCase())
//console.log(namesToUpperCase)

//FILTER metodu kosulları saglayan diziyi dondurur
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  const countriesContainingLang = countries.filter((country) =>
    country.includes('land')
  )
  //console.log(countriesContainingLang) //icerisinde land olan ulkeleri dondurur => Fineland, Ireland

//EVERY metodu
const names2 = ['sena', 'sila', 'feyza', 'melike']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr) //true dondurur tum elemanlar string oldugu icin


//FIND metodu
const numbers2 = [2,4,6,8,10]
console.log(
    numbers2.find((number) => number>5)
)

//SORT metodu
const names3 = ['sena', 'sila', 'feyza', 'melike']
names3.sort()
console.log(names3)

const numbers3 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers3.sort()) //[100, 3.14, 37, 9.81] string olmadıgı icin direkt sort yanlıs sıralar
numbers3.sort(function (a, b) {
  return a - b 
})

console.log(numbers3) // [3.14, 9.81, 37, 100] a-b yaptigi icin kucukten buyuge sıralar

numbers3.sort(function (a, b) {
  return b - a
})
console.log(numbers3) //[100, 37, 9.81, 3.14] b-a yaptigi icin buyukten kucuge sıralar
