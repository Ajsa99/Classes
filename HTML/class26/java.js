// var sum = 0;
// var n = 0;

// for(let i=0; i<n; i++){
//     sum += i;
// }

// function sum(n) {
//     var s = 0;
//     for(let i=0; i<n; i++){
//         s += i;
//     }
//     return s;
// }

//Rekurzivna funkcija
// function sumR(n) {
//     var sum = 0;
//     if(n === 1){
//         return 1;
//     }

//     sum = n + sumR(n-1);
//     return sum;
// }

// console.log(sumR(10));

// function productR(n) {
//     var prod = 0;
//     if(n === 1){
//         return 1;
//     }

//     prod = n * productR(n-1);
//     return prod;
// }

// console.log(productR(4));

//[4,3,2,1]
// function contdown(n) {
//     if(n === 1){
//         // return "1";
//         return [1];
//     }
//     // var string = `${n} ${contdown(n-1)}`;
//     // var string = n + " " + contdown(n-1);
//     // var array = [n, ...contdown(n-1)];
//     var array = [];
//     array.push(n);
//     array.push(...contdown(n-1));

//     // return string;
//     return array;
// }

// console.log(contdown(4));

//
// var a = [1,2,3,4];
// var b = [...a];

// b.push(4);

// console.log(a,b);

//2,5
//2,3,4,5
function range(a, b) {
  if (a === b) {
    return b;
  }

  var string = `${a}, ${range(a + 1, b)}`;
  return string;
}

console.log(range(2, 5));
