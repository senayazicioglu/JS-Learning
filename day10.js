const a = [1,2,3,4,5,6]
const b = [3,4,5,6,7,8]

let A = new Set(a)
let B = new Set(b) //b'yi kume haline getirdik

// B'nin A'dan farklı elemanlarını yazdırır
console.log(
    b.filter(num => !A.has(num))
)

/* console.log(
    a.filter(num => B.has(num)) //a ve b'nin ortak elemanlarını verir
) */

/*const c = [...a , ...b]
console.log(new Set(c)) a ve b yi birlestirir*/

/*const names = ['sena','alihan','melike','murat']
const namesSet = new Set();

for(let name of names){
    namesSet.add(name)
}

console.log(namesSet)

console.log(
    namesSet.has('sena')
)

namesSet.delete('sena')
console.log(namesSet)

console.log(
    namesSet.has('sena')
)
namesSet.clear()

console.log(
    namesSet.has('melike')
)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

console.log(languages)
console.log(languages.length)

//dilleri tekrar etmeyecek sekilde yazdirir
const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)
*/

/*
for(let name of names){
    console.log('Ad', name)
} 
*/
//names.forEach(name => console.log('Ad', name))

/*
const names = new Set(['tayfun','ahmet','mehmet']);
[...names].map(name => console.log(name))
*/

/*names.add('sena')
names.add('alihan')
names.add('murat')
names.add('melike')

console.log(names)*/