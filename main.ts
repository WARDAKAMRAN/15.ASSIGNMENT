// let guest_list : string [] = ['Warda','Waleed','Aqsa','Fathma'];
// for(let i=0; i<guest_list.length; i++)(
//     console.log('Respected Sir/Madum' + guest_list[i] + ',\nWe invited you on dinner tomorrow,\n\nThank You\n')
// )
let guestArr : string[] = ['Warda','Waleed','Aqsa','Fathma'];
let canNotAttend : string ="waleed"

//console.log(canNotAttend +  " can not attend the dinner,")
let newGuest : string = "waleed"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

//console.log(guestArr)

guestArr.map((items) => 
console.log(`Dear ${items},you are invited to the dinner,`))

