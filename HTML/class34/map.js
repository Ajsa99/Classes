const array = [
  { id: 1, name: "Suad", address: { street: "Hotkovo", number: 23 } },
  { id: 2, name: "Irfan", address: { street: "Banjaluka", number: 21 } },
  { id: 3, name: "Ramiz", address: { street: "Prvomajska", number: 12 } },
  { id: 4, name: "Ahmed", address: { street: "Potok", number: 40 } },
  { id: 5, name: "Samil", address: { street: "Bukres", number: 56 } },
  { id: 6, name: "Mejla", address: { street: "Lug", number: 43 } },
  { id: 7, name: "Ajsa", address: { street: "Hercegovacka", number: 62 } },
];

// const newArray = array.map((value, index) => {
//   return value.address;
// })

// const newArray = array
//   .filter((value) => value.name[0] == "S")
//   .map((value) => value.name);

// const newArray = array
//   .filter((value) => value.address.number > 25)
//   .map((value) => value.address);

const newArray2 = array.reduce((result, value, index, array) => {
  if (value.address.number > 25) {
    result.push(value.address);
  }
  return result;
}, []);

// console.log(newArray2);

//   value/element, index, array
// Array.prototype.newMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];
//     arr.push(callback(element, i, this));
//   }
//   return arr;
// };

// [1, 2, 3].newMap((value) => value * 2);
// [1, "aa"].newMap(() => undefined);

// console.log(newArray);

Array.prototype.newReduce = function (callback, initialValue) {
  let result = initialValue ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (initialValue) {
      result = callback(result, this[i], index, this);
    } else {
      result = callback(result, element, index, this);
    }
  }
  return result;
};

[1, 2, 3, 4, 5, 6].newReduce((result, value) => result + value);
console.log;
