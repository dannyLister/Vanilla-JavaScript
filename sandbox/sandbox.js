
// // //Chapter 1 - playing around with incrementals...

// // let number = 2;

// // function increment(number) {
// //   number++;
// // }
// // console.log(number); //returns x is undefined

// // //Chapter 1.2 playing with references

// // let objectOne = {
// //   x: 2,
// //   y: 1
// // };

// // let objectTwo = objectOne;

// // console.log(`objectOne = `);
// // console.log(objectOne);

// // console.log(`objectTwo = `);
// // console.log(objectTwo);

// // console.log('change objectOne.y to = 2');
// // objectOne.y = 2;

// // console.log(`objectOne = `);
// // console.log(objectOne);

// // console.log(`objectTwo = `);
// // console.log(objectTwo);

// // console.log('change objectTwo.y to = 3');
// // objectTwo.y = 3;

// // console.log(`objectOne = `);
// // console.log(objectOne);

// // console.log(`objectTwo = `);
// // console.log(objectTwo);

// //Chapter 1.2 playing with  the spread operator to create new object

// // let mergedObject = {
// //   ...objectOne,
// //   ...objectTwo
// // };

// // console.log(
// //   `mergedObject = ${JSON.stringify(mergedObject)}`
// // );

// // Object.keys()

// let objectOne = {
//   name: "Daniel",
//   age: 21
// };

// console.log(Object.keys(objectOne));

// console.log(
//   `objectOne = ${JSON.stringify(objectOne)}`
// );

// let objectTwo = {
//   pets: "dog",
//   married: true
// };

// console.log(`Object.getOwnPropertyNames = ${Object.getOwnPropertyNames(objectTwo)}`);

// console.log(
//   `objectOne = ${JSON.stringify(objectOne)}`
// );

// let myObject = Object.create({}, {
//   getProperty: {
//     value: function() { return this.property, this.anotherProperty; }
//   }
// });
// myObject.property = "some property";
// myObject.anotherProperty= "some other property";

// console.log(Object.keys(myObject));

// console.log(Object.values(objectOne));

// console.log(Object.entries(objectOne));


const scaryMonster = {
  dinosaur: true,
  type: "T-Rex"
};

for(const[key, value] of Object.entries(scaryMonster)) {
  console.log(`${key} ${value}`);
};