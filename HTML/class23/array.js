// var a = [1,2,3,4,5,"2"];
// var array = [1,2,3,4, [1,2,3,4, [1,2,3,4]]];

// console.log(array[4][4][4]);

// var array = [
//     [
//         ["nesto 2"],
//         ["nesto 3"],
//     ]
//     [
//         ["nesto 4"],
//         ["nesto 5"]
//     ]
//     ["nesto"]
// ];

// console.log(array[1][0][0]);


// for(;1;){         //beskonacna for petlja
//     console.log("Ovo je infinitiv");
// }



// var m = 0;
// var a = 10+ m++;  //a = 10
// var b = 10+ ++m;  //b = 12

// console.log(a, b);

// var n = 10;
// var sum = 0;

// for(var i=0;i<n;i++){
//     sum += i;
// }
// console.log(sum);



// var array = [1,2,3,4,5,6];

// var n=2;
// var found = false;
// for(var i=0; i<array.length; i++){
//     if(array[i] === n){
//         found = true;
//         console.log(i);
//     }
// }
// if(!found){
//     console.log(-1);
// }


// var array = [1,2,3,4,5,6]

// var max = array[0];
// var min = array[0];

// for(var i = 0;i<array.length;i++){
//     if(array[i] > max)
//     {
//         max = array[i];
//     }
//     if(array[i] < min)
//     {
//         min = array[i];
//     }
// }
// console.log(`Najveci broj je ${max} , a najmanji ${min}.`);



var array1 = ['a','b','c','d'];
var array2 = ["a","b","c"];

var common = [];
for(var i = 0; i < array1.length; i++){
    for(var j = 0; j< array2.length; j++){
        if(array1[i] === array2[j]){
            common.push(array1[i]);
        }
    }
}

console.log(common);
