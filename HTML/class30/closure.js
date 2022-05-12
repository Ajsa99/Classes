// const outer = (a) => {
//     return (b) => {
//         return a + b;
//     };
// };

// const inner = outer(10);

// console.log(inner(20));


const closure = (array) => {
    return () => {
            return array.length > 0 ? true : false;
        };
};

let array1 = [123,34,43,6];
let array2 = [2];

const isEmpty1 = closure(array1);
const isEmpty2 = closure(array2);

console.log(isEmpty1());    
array2.pop;
console.log(isEmpty1());