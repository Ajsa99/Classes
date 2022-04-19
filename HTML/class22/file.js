// var grade = 70;


// if(grade <= 55){
//     console.log("Ocena je 5");
// }else if(grade <= 66){
//     console.log("Ocena je 6");
// }else if(grade <= 76){
//     console.log("Ocena je 7");
// }else if(grade <= 86){
//     console.log("Ocena je 8");
// }else if(grade <= 96){
//     console.log("Ocena je 9");
// }else{
//     console.log("Ocena je 10");
// }

// 5 -> >55
// 6 -> 56-65
// 7 -> 66-75
// 8 -> 76-85
// 9 -> 86-95
// 10 -> >95

var array = [1,12,13,123];

array.push("str");
console.log(array);

array.pop();
console.log(array);

array.unshift("dodaje");
console.log(array);

array.shift();
console.log(array);


var c = array.concat(arraya);  //sastavljanje 2 array u 1
var c = array.concat(arraya).concat(arrayb);

const index = array.findIndex(122);   //index od  .. vrednosti

const index = array.find(122);  //vraca vrednsot elementa

const index = array.includes(12);  //vraca boolean vrednost 