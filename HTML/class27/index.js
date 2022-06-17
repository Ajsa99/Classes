// for (let index = 0; index < 10; index++) {
//   const a = 10;
//   console.log(a);
// }

// const a = {};

// a.name = "ajsa";

// console.log(a);

// let b = 20;

// function removeCharacter(title, character) {
//   return title.replace(character, "");
// }

// console.log(removeCharacter("ovo je c", "c"));

// const removeCharacter2 = (title = "123j", character = "j") => {
//   return title.replace(character, "");
// };

// console.log(removeCharacter2("ovo nije c", "c"));

// let array1 = [1,2,3,4,5,6,7];
// let array2 = array1;

// array2.push("a");

// console.log(array1, array2);

// let array1 = [1,2,3,4,5,6,7];
// let array2 = [...array1];

// array2.push("a");

// console.log(array1, array2);

// let o1 = {};
// let o2 = o1;

// o2.name = "name";

// console.log(o1, o2);

// let array1 = {name: 'ajsa'};
// let array2 = {...array1};

// array2.name = "nerma";

// console.log(array1, array2);

// function charseToString(...args) {
//   let sum = "";
//   for (let index = 0; index < args.length; index++) {
//     const element = args[index];
//     sum += element;
//   }

//   return sum;
// }

// charseToString(1,2,3,4,5, "a", "b", "c");

// const sum = (...args) => {
//     let tempSum = 0;
//     for(let i = 0; i< args.length; i++){
//         const element = args[i];
//         tempSum += element;
//     }
//     return tempSum;
// };

// console.log(sum(1,2,3,4,5,6,7));

const sum = (...args) => {
  let tempSum = 0;
  for (let i = 0; i < args.length; i++) {
    const element = args[i];

    if (typeof element === "number") {
      tempSum += element;
    }
    if (typeof element === "string") {
      // tempSum += parseInt(element);
      // tempSum += +element;
      tempSum += Object.is(+element, NaN) ? 0 : +element;
    }
  }
  return tempSum;
};

// console.log(sum(1,2,3,4,'3','2','334 gfg'));
console.log(sum(1, 2, 3, 4, "3", "2", "3"));
