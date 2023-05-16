//day8
ad = 'sena' //window scope

let name = 'sena' //global scope
let surname = 'yazıcıoglu'

function letsLearnScope() {
    console.log(name,surname) //sena yazıcıoglu
    if(true){
        let name = 'feyza'  //local scope
        let surname = 'parlak'
        console.log(name,surname) //feyza parlak
    }
    console.log(name,surname) //sena yazıcıoglu
}
letsLearnScope()
console.log(name,surname) //sena yazıcıoglu


const user = { 
    name : 'Sena', 
    surname : 'Yazici',
    age : 20,  
    isMarried : false,
    skills : [ //key
        'HTML',
        'Javascript',//value
        'C',
        'Java'
    ],
    siblings: [ {  //key
        name : 'sıla',  //value
        surname : 'yazıcı'
        }
    ]

}
 console.log(user)