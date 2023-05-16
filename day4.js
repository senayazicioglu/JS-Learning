/* let result = prompt('2+5 kaç yapar?' )

if(result == '7'){
    console.log('Doğru cevabı verdin!')
}else{
    console.log('Hatalı cevap verdin, doğru cevap 7 olmalıydı!')
} */

/*let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}*/

let result = parseInt(prompt('2 + 5 kac yapar?'))

console.log(
    result === 7 ? 'dogru cevap' : 'yanlis cevap'
)