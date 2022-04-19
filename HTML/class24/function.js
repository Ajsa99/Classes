
// function concatArray(array1, array2){
//     if(Array.isArray[array1] && Array.isArray[array2]){
//         return  array1.concat(array2);                     //concat spaja dva Array-a
//     }
//         return undefined;
// }

// var a = [1,2,3];
// var b = ["a","b","c"];

// console.log(concatArray(a,b));



// function comonLetters(a,b){
//     if(typeof a !== 'string' || typeof b !== 'string'){
//         return undefined;
//     }

//     var common = [];
//     for(let i; i < a.length; i++){
//         for(let j; j < b.length; j++){
//             if(a[i] === b[j])
//             common.push(a[i]);
//         }
//     }
//     return common;
// }
// console.log(comonLetters("dea","abc"));


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

// //Hoisting
// a();

// console.log(test);

// var test = 10;

// function a(){
//     test = 20;
// }

// console.log(test);

//Scope
var test = 10;

function a(){
    var test = 20;
}

a();

console.log(test);