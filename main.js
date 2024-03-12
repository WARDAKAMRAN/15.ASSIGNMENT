
var guestArr = ['Warda', 'Waleed', 'Aqsa', 'Fathma'];
var canNotAttend = "waleed";
console.log(canNotAttend +  " can not attend the dinner,")
var newGuest = "waleed";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",you are invited to the dinner,"));
});
