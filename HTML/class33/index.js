// removeFirst = (array) => {
//   const arr1 = [...array];
//   //   array.shift();
//   //   return array;
//   arr1.shift();
//   return arr1;
// };
// const arr = [1, 1, 1];

// console.log(removeFirst(arr));
// console.log(arr);

//Filter metoda

const users = [
  { id: 1, name: "Ajsa", age: 23 },
  { id: 2, name: "Sejla", age: 27 },
  { id: 3, name: "Nedzad", age: 24 },
];

const filteredUsers = users.filter((user, index) => {
  //   console.log(user);
  //   return user.id === 1;
  //   return user.name == "Nedzad";
  //   return user.age < 25;
});

//element, index, array

// Array.prototype.newFilter = function name(callback) {
//   console.log(this);
//   const element = this[i];

//   for (let i = 0; this.length; i++) {
//     return newArray;
//     if (callback(element, i, this)) {
//       newArray.push(elemment);
//       return (element = this[i]);
//     }
//   }
// };

// console.log(filteredUsers);

Array.prototype.newFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      return element;
    }
  }
  return undefined;
};

const foundUsers = users.find((user, index) => {
  return user.name === "Ajsa";
});

console.log(foundUsers);
