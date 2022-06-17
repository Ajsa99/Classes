// function concatArrays(array1, array2) {
//   if (Array.isArray(array1) && Array.isArray(array2)) {
//     return array1.concat(array2);
//   }

//   return undefined;
// }

// console.log(concatArrays([1, 2], ["a", "b"]));

function commonLetters(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return undefined;
  }

  var common = [];
  for (let index1 = 0; index1 < a.length; index1++) {
    for (let index2 = 0; index2 < b.length; index2++) {
      if (a[index1] === b[index2]) {
        common.push(a[index1]);
      }
    }
  }

  return common;
}

// console.log(commonLetters("jes", "abds"));

// var a = 10;

// switch(a){
//     case 10:
//         console.log(`This is 10`);
//         break;
//     case 20:
//         console.log(`This is 20`);
//         break;
//     default:
//         console.log(`Default`);
//         break;
// }

// function getHexColor(color){
//     switch(color){
//         case "red":
//             return "#ff0000";
//         case "green":
//             return "#00ff00";
//         case "blue":
//             return "#0000ff";
//         case "white":
//             return "#fff";
//         case "black":
//             return "#000";
//     }
// }
// console.log(getHexColor("black"));

//Hoisting
// a();

// console.log(test);

// var test = 10;

// function a() {
//   test = 20;
// }

// console.log(test);

//Scope
var test = 10;

function a() {
  var test = 20;
}

a();

console.log(test);
