//destructuring -> seklini bozma 
//spread -> dagilma, yayma
//rest -> kalanın tamamı

/*
const numbers = [undefined,9,11] //elemanı undefined yapıp sonra deger atarsak undefined olan elemana o degeri yazdırır
const [
    num1=1,
    num2,
    num3
] = numbers //bu sekilde yaparak da dizideki 1,2,3vs elemanların degerlerini alabiliriz
console.log(num1) //virgul koyarak diger elemmanı es gecebiliriz bu sekilde


console.log(numbers[0]) //7
console.log(num1) //7

console.log(numbers[1]) //9
console.log(num2) //9

console.log(numbers[2]) //11
console.log(num3) //11 */

/*
const stack = [
    ['HTML','CSS',['JAVASCRİPT','REACT','SVELTE']],
    ['PHP','MYSQL','NODEJS']
]

const [[firstLanguage, secondLanguage, thirdLanguage], backend] = stack
console.log(thirdLanguage)*/

/*const names = ['sena','feyza','havva','gufran','ahmet','enes']

const [myName, mySisterName, myMotherName, ...otherNames]=names

console.log(myName)
console.log(mySisterName)
console.log(myMotherName)
console.log(otherNames) //dizideki kalan elemanları ...otherNames yaparak alabilir
*/


const countries = [
    ['Finland' ,'Helsinki'],
    ['Sweden' ,'Stockholm'],
    ['Norway' ,'Oslo'],
    ['Turkiye' ,'Ankara']
]

for(const [country,capital] of countries){
    console.log(`Ülke: ${country} - Başkent: ${capital}`)


/*for(const country of countries){ 
    console.log(`Ülke: ${country[0]} - Başkent: ${country[1]}`)
}*/ //ustteki for dongusuyle aynı mantıga gelir

